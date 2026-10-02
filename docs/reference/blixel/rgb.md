# RGB colour

Build a colour number from red, green, and blue channels.

```sig
UNBdevBLiXel.rgb(255, 0, 0)
```

## Parameters

* **redValue**: Red intensity from 0 to 255.
* **greenValue**: Green intensity from 0 to 255.
* **blueValue**: Blue intensity from 0 to 255.

## Returns

A number in packed 0xRRGGBB format for BLiXel colour inputs.

## Usage notes

The implementation keeps each channel's low 8 bits rather than clamping out-of-range inputs. This calculation does not access hardware.

## Example

```blocks
UNBdevBLiXel.setAll(UNBdevBLiXel.rgb(255, 0, 0))
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
