## Minutes of meeting

### 3rd Feb 2017

 - DrawingsTable
 - EntriesLog : Entrieslog table needed for effiient querying at runtime
 - Stock In
 - What is the entry point of stock in system?
 - Purchase order No in stock in Screen
 - Purchase order summary in stock in Screen
 - boolean flag not required
 - can payment vouchers be made for multiple purchase orders?? *consider **ask the supervisor ***No
 - one to many relationship between purchase order and payment vouchers
 - system should not impose any time constraint between payments and purchase!!
 - size of data to accumulate over one year ? Any provisions for volume manangement  ??

 ## With Hostel Manager 7th Feb 2017
 - Suppliers fixed?
 - Rates fixed ? both fixed + variable
 - Qty drawn from stock
 - verification message on changing rate and every command which can change database
 - Stock out evening and morning mentioned.
 - Chronological listing
 - Customized Product might be added.
 - Rate per unit in food summary + times
 - Views with adjustable units
 - New requirements might emerge.. calculate the number of students who use heaters

## With boys 10th Feb
- expose a RESTFUL API for FoodItems table. the rest of the tables can be covered in same way with minimum overhead
- apply validations on datatypes, model and foreingkeys i.e.
  - check each field for correct data type. Return standarized error messages if the type isn't correct
  - check the model -- the JSON from POST or PUT must contain the required fields with no valeus omitted. Optional fields (if any ) can be omitted
  - Foreing Key .. in case the Foreignkey in the JSON is not valid, throw an error
  - The error messages will be returned in form of JSON
  - Check appropriate conventions of doing these things on blogosphere and stackoverflow docs
  - in case of grave confusion, reach out to 67/2

https://material.io/guidelines/style/color.html

## With Staff 27th Mar
- consumption statistics
- edit the temp items list
- demand and stock out duplication avoidance
- time along with last delivery and last drawn out
- change title of summary List of Available Items 
