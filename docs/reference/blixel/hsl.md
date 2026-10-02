# HSL colour

Build a colour number from hue, saturation, and luminosity.

```sig
UNBdevBLiXel.hsl(120, 99, 50)
```

## Parameters

* **h**: Hue angle in degrees. Rounded and wrapped into 0..359.
* **s**: Saturation from 0 to 99; rounded and constrained.
* **l**: Luminosity from 0 to 99; rounded and constrained.

## Returns

A packed RGB colour number for BLiXel colour inputs.

## Usage notes

This calculation does not access hardware.

## Example

```blocks
UNBdevBLiXel.setAll(UNBdevBLiXel.hsl(120, 99, 50))
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
