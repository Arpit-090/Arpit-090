#include<iostream>
#include<string>
#include<vector>
#include<deque>
#include<list>
#include<map>
#include<unordered_map>
#include<ctime>
#include<unordered_set>

using namespace std;

struct product{
	int productID;
	string product_name;
	string product_category;
};

struct order{
	int orderID;
	int productID;
	int quantity;
	string costumerID;
	time_t order_date;
};

int main(){
	
	vector<product> products ={
	
		{ 001 , "laptop" , "electronics"}
		{ 002 , "smartPnone" , "electronics"}
		{ 003 , "glass" , "fasion"}
		{ 004 , "trauser" , "fasion"}
		{ 005 , "mixer" , "kitchen"}
		{ 006 , "oven" , "kitchen"}	
	}
	
	deque<string> recent_costumers = {"cos1","cos2","cos3","cos4","cos5"}
	deque.push_back("cos5")
	deque.push_front("cos1")
	deque.push_front("cos2")
	
	
	list<order> order_history
	order_history.push_back({ 01 , 001 , 1 , "cos1" , time(0) });
	order_history.push_back({ 02 , 002 , 2 , "cos2" , time(0) });
	order_history.push_back({ 03 , 003 , 5 , "cos3" , time(0) });
	order_history.push_back({ 04 , 004 , 3 , "cos4" , time(0) });
	
	return 0;
}



