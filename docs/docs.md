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
PONumber | Purchase oRder Number
Date | Date of Voucher
