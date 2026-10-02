# Named colour

Choose one of the named BLiXel colours.

```sig
UNBdevBLiXel.colour(UNBdevBLiXelColour.Blue)
```

## Parameters

* **colour**: Choose Red, Orange, Yellow, Green, Blue, Indigo, Violet, Purple, White, or Black.

## Returns

The selected packed RGB colour number.

## Usage notes

Black represents lights off. This calculation does not access hardware.

## Example

```blocks
UNBdevBLiXel.setAll(UNBdevBLiXel.colour(UNBdevBLiXelColour.Blue))
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
