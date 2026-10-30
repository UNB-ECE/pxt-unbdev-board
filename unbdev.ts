/**
 * Unified toolbox category for the integrated UNBdev.board.
 *
 * Feature implementations retain their established TypeScript namespaces;
 * blockNamespace metadata routes their blocks here for one student-facing
 * toolbox entry.
 *
 * `subcategories` \u2014 not `groups` \u2014 is what makes this entry expand into
 * per-feature rows. The toolbox builds nested rows only from `subcategories`
 * (webapp/src/toolboxeditor.tsx), and binds a block to a row when the block's
 * `subcategory` attribute matches the row name (webapp/src/blocks.tsx,
 * `filterBlocks`). `groups` renders flat section headers inside a flyout, so
 * the two are not interchangeable.
 *
 * The row names and icons follow b.Board so the two editors read the same:
 * `BBoard_Mic`, `BLiXel`, `BBoard_WiFi`, `BBoard_Control` and `BBoard_Motor`.
 * A block that is both `advanced=true` and tagged with one of these
 * subcategories goes into a `more` row nested inside that feature row, like
 * each control on code.brilliantlabs.ca. Advanced blocks without a
 * subcategory still use the namespace-level `more` row.
 *
 * `subcategoryIcons` supplies the same recognizable microphone, spinner,
 * Wi-Fi, microchip, and gear cues used by b.Board. It is consumed by the
 * pinned UNB PXT framework's nested-category renderer.
 *
 * `BBoard_Control` carries the student-facing Click socket blocks ported from
 * Brilliant Labs' bBoard_Control; see UNB-ECE/unblabs-platform#87.
 *
 * `advanced=true` on the namespace places this entry under the editor's
 * Advanced row, below Extensions, as b.Board does. Its own chevron expands
 * the named feature rows without affecting the rest of the toolbox.
 */
//% color=#9E4894 icon="\uf2db" block="UNBdev.board"
//% weight=98 advanced=true subcategories='["BBoard_Mic", "BLiXel", "BBoard_WiFi", "BBoard_Control", "BBoard_Motor"]'
//% subcategoryIcons='{"BBoard_Mic":"\uf130","BLiXel":"\uf110","BBoard_WiFi":"\uf1eb","BBoard_Control":"\uf2db","BBoard_Motor":"\uf085"}'
namespace UNBDev {
    // Keep namespace metadata available without exposing an extra block.
    //% blockHidden=true
    export function categoryMarker(): void { }
}
