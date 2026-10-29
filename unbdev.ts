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
 * `more` row: blocks marked `advanced=true` collect into the generic "more"
 * row that belongs to this parent namespace, mirroring how Brilliant Labs'
 * b.Board keeps everyday blocks up front and tucks setup, diagnostics, and
 * convenience helpers behind `more`. An advanced block must not also carry a
 * `subcategory`: `partitionBlocks` and `filterBlocks` (webapp/src/blocks.tsx)
 * match the two attributes independently, so a block with both would render
 * twice -- once in its feature row and once in `more`. The framework supports
 * one `more` row per parent namespace, placed alongside the feature rows, so
 * advanced blocks from every feature share that single row.
 *
 * `subcategoryIcons` supplies the same recognizable microphone, spinner,
 * Wi-Fi, gears, and microchip cues used by b.Board. It is consumed by the
 * pinned UNB PXT framework's nested-category renderer.
 *
 * `Control` carries the student-facing Click socket blocks ported from
 * Brilliant Labs' bBoard_Control; see UNB-ECE/unblabs-platform#87.
 *
 * It appears between the editor's Extensions and Advanced rows. Its own
 * chevron expands or collapses the named feature rows without affecting the
 * rest of the toolbox.
 */
//% color=#9E4894 icon="\uf2db" block="UNBdev.board"
//% weight=98 subcategories='["Microphone", "BLiXel", "Wi-Fi", "Motors", "Control"]'
//% subcategoryIcons='{"Microphone":"\uf130","BLiXel":"\uf110","Wi-Fi":"\uf1eb","Motors":"\uf085","Control":"\uf2db"}'
namespace UNBDev {
    // Keep namespace metadata available without exposing an extra block.
    //% blockHidden=true
    export function categoryMarker(): void { }
}
