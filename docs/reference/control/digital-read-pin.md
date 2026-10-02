# Digital read Click pin

Read the digital level reported for a Click socket signal.

```sig
UNBdevClick.digitalReadPin(UNBdevClick.ClickPin.INT, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose a mikroBUS signal: AN, RST, CS, SCK, MISO, MOSI, SDA, SCL, TX, RX, INT, or PWM. Use only signals approved for the attached module.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Returns

A number reported by the controller digital-read API (normally 0 for low or 1 for high); it is not a voltage measurement.

## Usage notes

Configure the signal as an input before polling it. The hardware response and failure behavior remain subject to physical validation.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.setPinMode(UNBdevClick.ClickPin.INT, UNBdevClick.PinMode.Input, UNBdevClick.Socket.A)
let level = UNBdevClick.digitalReadPin(UNBdevClick.ClickPin.INT, UNBdevClick.Socket.A)
basic.showNumber(level)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
