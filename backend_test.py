import requests
import sys
import json
from datetime import datetime

class AngaraRestaurantAPITester:
    def __init__(self, base_url="https://angara-veg.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": None,
                "error": None
            }
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result["response_data"] = response.json()
                except:
                    result["response_data"] = response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    result["error"] = error_data
                    print(f"Error response: {error_data}")
                except:
                    result["error"] = response.text
                    print(f"Error response: {response.text}")

            self.test_results.append(result)
            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": None,
                "success": False,
                "response_data": None,
                "error": str(e)
            }
            self.test_results.append(result)
            return False, None

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test GET status
        success1, _ = self.run_test(
            "Get Status Checks",
            "GET", 
            "api/status",
            200
        )
        
        # Test POST status
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success2, _ = self.run_test(
            "Create Status Check",
            "POST",
            "api/status", 
            200,
            data=test_data
        )
        
        return success1 and success2

    def test_reservation_without_webhook(self):
        """Test reservation endpoint without webhook URL configured"""
        reservation_data = {
            "name": "Test Customer",
            "email": "test@example.com", 
            "phone": "+91 9876543210",
            "date": "2025-01-20",
            "time": "19:00",
            "guests": "4",
            "message": "Test reservation"
        }
        
        # This should fail with 500 since webhook URL is not configured
        return self.run_test(
            "Reservation Without Webhook URL",
            "POST",
            "api/reservations",
            500,
            data=reservation_data
        )

    def test_reservation_with_invalid_data(self):
        """Test reservation endpoint with invalid data"""
        invalid_data = {
            "name": "",  # Empty name should cause validation error
            "phone": "",  # Empty phone should cause validation error
        }
        
        return self.run_test(
            "Reservation With Invalid Data",
            "POST", 
            "api/reservations",
            422,  # Validation error
            data=invalid_data
        )

def main():
    print("🧪 Starting Angara Restaurant API Tests...")
    print("=" * 50)
    
    # Setup
    tester = AngaraRestaurantAPITester()
    
    # Run tests
    print("\n📡 Testing Basic API Endpoints...")
    tester.test_root_endpoint()
    tester.test_status_endpoints()
    
    print("\n🍽️ Testing Reservation Endpoints...")
    tester.test_reservation_without_webhook()
    tester.test_reservation_with_invalid_data()
    
    # Print results summary
    print("\n" + "=" * 50)
    print(f"📊 Test Results Summary:")
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Print detailed results
    print("\n📋 Detailed Test Results:")
    for result in tester.test_results:
        status = "✅ PASS" if result["success"] else "❌ FAIL"
        print(f"{status} - {result['test_name']} ({result['actual_status']})")
        if not result["success"] and result["error"]:
            print(f"    Error: {result['error']}")
    
    # Save results to file
    with open('/app/test_reports/backend_api_results.json', 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "summary": {
                "tests_run": tester.tests_run,
                "tests_passed": tester.tests_passed,
                "success_rate": (tester.tests_passed/tester.tests_run)*100
            },
            "detailed_results": tester.test_results
        }, f, indent=2)
    
    print(f"\n💾 Results saved to: /app/test_reports/backend_api_results.json")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())