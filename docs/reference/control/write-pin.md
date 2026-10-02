# Write Click pin

Send a digital high or low command to a Click socket signal.

```sig
UNBdevClick.writePin(UNBdevClick.ClickPin.RST, 1, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose a mikroBUS signal: AN, RST, CS, SCK, MISO, MOSI, SDA, SCL, TX, RX, INT, or PWM. Use only signals approved for the attached module.
* **value**: 0 requests low; any nonzero number requests high.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

First set this signal to Output. Writing does not change its direction. Commands route through the board controller, not the micro:bit GPIO pins.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.setPinMode(UNBdevClick.ClickPin.RST, UNBdevClick.PinMode.Output, UNBdevClick.Socket.A)
UNBdevClick.writePin(UNBdevClick.ClickPin.RST, 1, UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
