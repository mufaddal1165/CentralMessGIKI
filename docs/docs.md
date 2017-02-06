# Central Mess Documentation

## Tables

### Food Item
Field | Description
-----|--------------
FoodId | unique ID through which a food will be identified in the system
Name | Name of the food
Type | Type of food (FK)
Quantity | The quantity or weight which is availabe in the store
LastEntryDate | The Date when this food item was added to stock
LastDrawingDate | The date when the food was last drawn from stock
MinReOrderLimit | The minimum weight or qty after which the item should be reordered
Unit|String literal specifying kilos, dozens, pieces

### Type of Food
Field | Description
------|-------------
Id | Unique ID for type of Food
Name | For the current system, there are two types : Fresh or Dry

### PurchaseOrder
Field | Description
------|-------------
Id| Unique ID
Supplier | Supplier ID (FK)
IssueDate | Date on which purchase order was made
DeliveryDate | Date on which delivery is expected


Note:
*its being assumed that all items in the purchase order will be required on same time*

### PurchaseOrderItems
Field | Description
------|-------------
Id  | Unique ID
Food | Food ID of the Item (FK)
PurchaseOrder | Purchase Order ID (FK)
Delivered | Boolean Flag to indicate that item was delivered or not
QuantityDemanded | The quantity of items ordered
*QuantityReceived | Quantity received
Rate | The rate at which the items are ordered

*Note : This field might not be needed

## Supplier
Field | Description
------|-------------
SupplierId | Unique ID of Supplier
Name | Name of the supplier
ContactNo | Contact Number of the supplier
Address | Address of the supplier


## Payment Voucher
Field | Description
------|-------------
PaymentVId | Payment Voucher Unique ID
PONumber | Purchase order Number (FK: PurchaseOrder)
Date | Date of Voucher
SupplierID | SupplierID

## DrawingsTable

Field|Description
-----|------------
DrawingID | Unique ID
FoodId | FK FoodItems 
Qty | Quantity of items drawn from system
Date | Date of the transaction

## EntriesLog

Field|Description
-----|------------
LogID | Unique ID
FoodId | FK FoodItems
Qty | Quantity of items added to store
PurchaseOrderItemNo | FK from PurchaseOrderItems Tables
Paid | Boolean value specifying paid or unpaid

## Relationships
 - Suppier 1 ---- n Payment Voucher 
 - Purchase Order 1 -----n Payment Voucher
 - FoodItems 1 ------ n EntriesLog
 - PurchaseOrderItem 1 ------ n EntriesLog
 - FoodItems 1 ------ n DrawingsTable
 - FoodItems 1 ------ n PurchaseOrderItem
 - PurchaseOrder 1 --------n PurchaseOrderItems
 - Supplier 1 ------------ n PurchaseOrder
 - TypeOfFood 1 -------- n FoodItems