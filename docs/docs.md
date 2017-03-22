# Central Mess Documentation

## Tables

### foodItem
Field | Description
-----|--------------
foodId | unique ID through which a food will be identified in the system
name | Name of the food
type | Type of food (FK)
quantity | The quantity or weight which is availabe in the store
lastEntryDate | The Date when this food item was added to stock
lastDrawingDate | The date when the food was last drawn from stock
minReOrderLimit | The minimum weight or qty after which the item should be reordered
unit|String literal specifying kilos, dozens, pieces

### typeofFood
Field | Description
------|-------------
typeOfFoodId | Unique ID for type of Food
name | For the current system, there are two types : Fresh or Dry

### purchaseOrder
Field | Description
------|-------------
pOId| Unique ID
supplier | Supplier ID (FK)
issueDate | Date on which purchase order was made
deliveryDate | Date on which delivery is expected


Note:
*its being assumed that all items in the purchase order will be required on same time*

### purchaseOrderItem
Field | Description
------|-------------
pOItemId  | Unique ID
foodId | Food ID of the Item (FK)
pOId | Purchase Order ID (FK)
delivered | Boolean Flag to indicate that item was delivered or not
quantityDemanded | The quantity of items ordered
*quantityReceived | Quantity received
rate | The rate at which the items are ordered

*Note : This field might not be needed

## supplier
Field | Description
------|-------------
supplierId | Unique ID of Supplier
name | Name of the supplier
contactNo | Contact Number of the supplier
address | Address of the supplier


## paymentVoucher
Field | Description
------|-------------
paymentVId | Payment Voucher Unique ID
pONumber | Purchase order Number (FK: PurchaseOrder)
date | Date of Voucher
supplierID | SupplierID

## drawingsTable

Field|Description
-----|------------
drawingID | Unique ID
foodId | FK FoodItems
quantity | Quantity of items drawn from system
date | Date of the transaction

## entriesLog

Field|Description
-----|------------
logID | Unique ID
foodId | FK FoodItems
quantity | Quantity of items added to store
pOItemNo | FK from PurchaseOrderItems Tables
date | date at which this item was received
paid | Boolean value specifying paid or unpaid

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
