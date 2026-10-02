# Set Click pin pull

Request a pull-up, pull-down, or no pull resistor on a Click socket input.

```sig
UNBdevClick.setPinPull(UNBdevClick.ClickPin.INT, UNBdevClick.PinPull.Up, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose a mikroBUS signal: AN, RST, CS, SCK, MISO, MOSI, SDA, SCL, TX, RX, INT, or PWM. Use only signals approved for the attached module.
* **pull**: Choose Up, Down, or None. Select the pull required by the approved module wiring.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

This does not change the signal direction. Configure Input first; do not assume a resistor value or voltage from this API.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.setPinMode(UNBdevClick.ClickPin.INT, UNBdevClick.PinMode.Input, UNBdevClick.Socket.A)
UNBdevClick.setPinPull(UNBdevClick.ClickPin.INT, UNBdevClick.PinPull.Up, UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
