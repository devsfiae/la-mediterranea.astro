# database model

## booking_items

### booking structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | booking_item_id |int(11) | __primary__ | |
| 2 | booking_date | date | | |
| 3 | booking_time | time | | |
| 4 | booking_persons | int(11) | | |
| 5 | table_id | int(11) | __foreign__ | __table_items__ |
| 6 | state_id | int(11) | __foreign__ | __state_items__ |
| 7 | person_id | int(11) | __foreign__ | __person_items__ |

### booking values

| # | booking_item_id | booking_date | booking_time | booking_persons | table_id | state_id | person_id |
| ---- | ---- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 2025-11-03 | 17:00:00 | 2 | 1 | 1 | 1 |
| 2 | 2 | 2025-11-03 | 17:00:00 | 4 | 2 | 1 | 2 |
| 3 | 3 | 2025-11-03 | 19:00:00 | 3 | 3 | 1 | 3 |

---

## category_items

### category structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | category_item_id |int(11) | __primary__ | |
| 2 | item_name | varchar(255) | | |

### category_items values

| # | category_item_id | item_name |
| ---- | ---- | --- |
| 1 | 10 | persons |
| 2 | 20 | drinks |
| 3 | 30 | food |
| 4 | 40 | events |
| 5 | 50 | booking |
| 6 | 60 | pages |
| 7 | 70 | subpages |
| 8 | 80 | slides |
| 9 | 90 | content |

---

## degree_items

### degree structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | degree_item_id |int(11) | primary | |
| 2 | item_name | varchar(255) | | |

### degree values

| # | degree_item_id | item_name |
| ---- | ---- | --- |
| 1 | 1 | 💣 |
| 2 | 2 | 💣💣 |
| 3 | 3 | 💣💣💣 |
| 7 | 7 | __NULL__ |

---

## menu_items

### menu structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | menu_item_id |int(11) | __primary__ | |
| 2 | item_name | varchar(255) | | |
| 3 | description | varchar(255) | | |
| 4 | price| float | | |
| 5 | volume| float| | |
| 6 | category_id | int(11) | __foreign__ | __category_items__ |
| 7 | subcategory_id| int(11) | __foreign__ | __subcategory_items__ |
| 8 | degree_id| int(11) | __foreign__ | __degree_items__ |
| 9 | image_id | int(11) | __foreign__ | __image_items__ |

### menu values

| # | menu_item_id | item_name | description | price | volume | category_id | subcategory_id | degree_id | image_id |
| ---- | ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | water | still water | 2.50 | 0.5 | 20 | 201 | 7 | 1 |

---

## person_items

### person structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | person_item_id |int(11) | __primary__ | |
| 2 | first_name | varchar(255) | | |
| 3 | last_name | varchar(255) | | |
| 3 | description | varchar(255) | | |
| 6 | category_id | int(11) | __foreign__ | __category_items__ |
| 7 | email_id| int(11) | __foreign__ | __email_items__ |
| 8 | image_id | int(11 ) | __foreign__ | __image_items__ |
| 7 | subcategory_id| int(11) | __foreign__ | __subcategory_items__ |

---

### person values

| # | person_item_id | first_name | last_name | description | category_id | email_id | image_id | subcategory_id |
| ---- | ---- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | John | Doe | general customer | 110 | 1 | 1 | 110 |

---

## state_items

### state structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | state_item_id |int(11) | __primary__ | |
| 2 | item_name | varchar(255) | | |
| 3 | description | varchar(255) | | |

### state values

| # | state_item_id | item_name | description |
| ---- | ---- | --- | --- |
| 1 | 1 | booked | table is booked |
| 2 | 2 | free | table is free |

---

## subcategory_items

### subcategory structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | subcategory_item_id |int(11) | primary | |
| 2 | item_name | varchar(255) | | |

### subcategory values

| # | subcategory_id | item_name | description |
| ---- | ---- | --- | --- |
|  | 110 | Customer | general customer |
|  | 120 | VIP Customer | customer with special needs |
|  | 130 | Employee | general employee |
|  | 140 | Manager | Employee with manager role |
|  | 201 | fruity/refreshing | 1st drink category |
|  | 202 | fruity/sweet | |
|  | 301 | meat | 1st meat category |

---

## table_items

### table structure

| # | Name | Type | Key | Table |
| ---- | ---- | --- | --- | ---- |
| 1 | table_item_id |int(11) | __primary__ | |
| 2 | item_name | varchar(255) | | |
| 1 | image_id |int(11) | __foreign__ | __table_items__ |

### table values

| # | table_id | item_name |
| ---- | ---- | --- |
| 1 | 1 | beach left |
| 2 | 2 | beach middle |
| 3 | 3 | beach right |
| 4 | 4 | restaurant |
| 5 | 5 | bar |

---
