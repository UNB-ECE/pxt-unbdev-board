# Show BLiXel bar graph

Represent a value using zero to five lit BLiXels in the last selected colour.

```sig
UNBdevBLiXel.showBarGraph(50, 100, 0)
```

## Parameters

* **value**: The number to display. Values outside the minimum/maximum range are constrained.
* **maximum**: The value represented by five lit BLiXels.
* **minimum**: Optional value represented by zero lit BLiXels; default 0.

## Usage notes

The pixel count is rounded to the nearest of five steps. When maximum is less than or equal to minimum, all five light if value is at least maximum, otherwise none light.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.setAll(0x00ff00)
UNBdevBLiXel.showBarGraph(50, 100, 0)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
