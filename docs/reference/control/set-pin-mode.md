# Set Click pin mode

Configure a Click socket signal as an input or output.

```sig
UNBdevClick.setPinMode(UNBdevClick.ClickPin.INT, UNBdevClick.PinMode.Input, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose a mikroBUS signal: AN, RST, CS, SCK, MISO, MOSI, SDA, SCL, TX, RX, INT, or PWM. Use only signals approved for the attached module.
* **mode**: Choose Input for reading a signal or Output for driving one.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

Set direction before writing or reading; changing direction alone does not choose an output value or pull resistor.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.setPinMode(UNBdevClick.ClickPin.INT, UNBdevClick.PinMode.Input, UNBdevClick.Socket.A)
UNBdevClick.setPinPull(UNBdevClick.ClickPin.INT, UNBdevClick.PinPull.Up, UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
