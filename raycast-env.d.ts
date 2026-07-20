/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Package Managers - Check and upgrade Homebrew formulae and casks */
  "enableBrew": boolean,
  /** undefined - Include --greedy casks in Homebrew outdated checks and upgrades */
  "enableBrewGreedy": boolean,
  /** undefined - Check and upgrade globally installed npm packages */
  "enableNpm": boolean,
  /** undefined - Check and upgrade globally installed yarn packages */
  "enableYarn": boolean,
  /** undefined - Check and upgrade globally installed pnpm packages */
  "enablePnpm": boolean,
  /** undefined - Check and upgrade outdated pip packages */
  "enablePip": boolean,
  /** undefined - Check and upgrade pipx-installed applications */
  "enablePipx": boolean,
  /** undefined - Check and upgrade Rust crates (requires cargo-update) */
  "enableCargo": boolean,
  /** undefined - Check and upgrade outdated Ruby gems */
  "enableGem": boolean,
  /** undefined - Check and upgrade Mac App Store apps (requires mas CLI) */
  "enableMas": boolean,
  /** undefined - Check and upgrade Go module tools */
  "enableGo": boolean,
  /** undefined - Check and upgrade globally installed bun packages */
  "enableBun": boolean,
  /** undefined - Check and upgrade globally installed deno executables */
  "enableDeno": boolean,
  /** undefined - Check and upgrade globally installed composer packages */
  "enableComposer": boolean,
  /** Upgrade Behavior - Ask for confirmation before upgrading one ecosystem or all ecosystems */
  "confirmBeforeUpgrade": boolean,
  /** undefined - Keep ecosystems that are already up to date visible in the list */
  "showUpToDateEcosystems": boolean,
  /** undefined - Simulate upgrades without making actual changes (safe testing) */
  "dryRunMode": boolean,
  /** undefined - Upgrade multiple ecosystems simultaneously for faster completion */
  "parallelUpgrade": boolean,
  /** Sorting - How to sort outdated packages within each ecosystem */
  "sortBy": "name" | "nameDesc" | "updateSize",
  /** undefined - Display current and latest version numbers in the list view */
  "showUpdateDetails": boolean,
  /** Auto-Refresh - Automatically refresh package status at set intervals */
  "autoRefreshInterval": "never" | "5" | "15" | "30" | "60",
  /** Notifications - Display system notifications when updates are available */
  "notificationsEnabled": boolean,
  /** Safety - Create a backup list of current versions before upgrading */
  "backupBeforeUpgrade": boolean,
  /** undefined - Avoid upgrading to new major versions (e.g., 2.x → 3.x) to prevent breaking changes */
  "skipMajorVersions": boolean,
  /** Display - Reduce spacing and show more items on screen */
  "compactMode": boolean,
  /** undefined - Display when the last update check was performed */
  "showLastCheckTime": boolean,
  /** Global PATH Override - Fallback colon-separated PATH directories if auto-detection fails. Find current path using: echo $PATH */
  "customPath": string,
  /** Homebrew PATH Override - Manual binary directory path for Homebrew. Find it using: dirname $(which brew) */
  "customPathBrew": string,
  /** npm PATH Override - Manual binary directory path for npm. Find it using: dirname $(which npm) */
  "customPathNpm": string,
  /** Yarn PATH Override - Manual binary directory path for Yarn. Find it using: dirname $(which yarn) */
  "customPathYarn": string,
  /** pnpm PATH Override - Manual binary directory path for pnpm. Find it using: dirname $(which pnpm) */
  "customPathPnpm": string,
  /** pip PATH Override - Manual binary directory path for pip/pip3. Find it using: dirname $(which pip) || dirname $(which pip3) */
  "customPathPip": string,
  /** pipx PATH Override - Manual binary directory path for pipx. Find it using: dirname $(which pipx) */
  "customPathPipx": string,
  /** Cargo PATH Override - Manual binary directory path for Cargo. Find it using: dirname $(which cargo) */
  "customPathCargo": string,
  /** Gem PATH Override - Manual binary directory path for gem. Find it using: dirname $(which gem) */
  "customPathGem": string,
  /** Go PATH Override - Manual binary directory path for Go. Find it using: dirname $(which go) */
  "customPathGo": string,
  /** Bun PATH Override - Manual binary directory path for Bun. Find it using: dirname $(which bun) */
  "customPathBun": string,
  /** Deno PATH Override - Manual binary directory path for Deno. Find it using: dirname $(which deno) */
  "customPathDeno": string,
  /** Composer PATH Override - Manual binary directory path for Composer. Find it using: dirname $(which composer) */
  "customPathComposer": string,
  /** Mas PATH Override - Manual binary directory path for mas CLI. Find it using: dirname $(which mas) */
  "customPathMas": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `check-updates` command */
  export type CheckUpdates = ExtensionPreferences & {}
  /** Preferences accessible in the `upgrade-all` command */
  export type UpgradeAll = ExtensionPreferences & {}
  /** Preferences accessible in the `list-installed` command */
  export type ListInstalled = ExtensionPreferences & {}
  /** Preferences accessible in the `detect-managers` command */
  export type DetectManagers = ExtensionPreferences & {}
  /** Preferences accessible in the `export-backups` command */
  export type ExportBackups = ExtensionPreferences & {}
  /** Preferences accessible in the `search-packages` command */
  export type SearchPackages = ExtensionPreferences & {}
  /** Preferences accessible in the `free-up-space` command */
  export type FreeUpSpace = ExtensionPreferences & {}
  /** Preferences accessible in the `system-health` command */
  export type SystemHealth = ExtensionPreferences & {}
  /** Preferences accessible in the `security-audit` command */
  export type SecurityAudit = ExtensionPreferences & {}
  /** Preferences accessible in the `ignored-packages` command */
  export type IgnoredPackages = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `check-updates` command */
  export type CheckUpdates = {}
  /** Arguments passed to the `upgrade-all` command */
  export type UpgradeAll = {}
  /** Arguments passed to the `list-installed` command */
  export type ListInstalled = {}
  /** Arguments passed to the `detect-managers` command */
  export type DetectManagers = {}
  /** Arguments passed to the `export-backups` command */
  export type ExportBackups = {}
  /** Arguments passed to the `search-packages` command */
  export type SearchPackages = {}
  /** Arguments passed to the `free-up-space` command */
  export type FreeUpSpace = {}
  /** Arguments passed to the `system-health` command */
  export type SystemHealth = {}
  /** Arguments passed to the `security-audit` command */
  export type SecurityAudit = {}
  /** Arguments passed to the `ignored-packages` command */
  export type IgnoredPackages = {}
}

