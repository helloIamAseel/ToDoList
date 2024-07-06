
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #1dbdc9 
		"--color-primary-50": "221 245 247", // #ddf5f7
		"--color-primary-100": "210 242 244", // #d2f2f4
		"--color-primary-200": "199 239 242", // #c7eff2
		"--color-primary-300": "165 229 233", // #a5e5e9
		"--color-primary-400": "97 209 217", // #61d1d9
		"--color-primary-500": "29 189 201", // #1dbdc9
		"--color-primary-600": "26 170 181", // #1aaab5
		"--color-primary-700": "22 142 151", // #168e97
		"--color-primary-800": "17 113 121", // #117179
		"--color-primary-900": "14 93 98", // #0e5d62
		// secondary | #da25aa 
		"--color-secondary-50": "249 222 242", // #f9def2
		"--color-secondary-100": "248 211 238", // #f8d3ee
		"--color-secondary-200": "246 201 234", // #f6c9ea
		"--color-secondary-300": "240 168 221", // #f0a8dd
		"--color-secondary-400": "229 102 196", // #e566c4
		"--color-secondary-500": "218 37 170", // #da25aa
		"--color-secondary-600": "196 33 153", // #c42199
		"--color-secondary-700": "164 28 128", // #a41c80
		"--color-secondary-800": "131 22 102", // #831666
		"--color-secondary-900": "107 18 83", // #6b1253
		// tertiary | #b740e2 
		"--color-tertiary-50": "244 226 251", // #f4e2fb
		"--color-tertiary-100": "241 217 249", // #f1d9f9
		"--color-tertiary-200": "237 207 248", // #edcff8
		"--color-tertiary-300": "226 179 243", // #e2b3f3
		"--color-tertiary-400": "205 121 235", // #cd79eb
		"--color-tertiary-500": "183 64 226", // #b740e2
		"--color-tertiary-600": "165 58 203", // #a53acb
		"--color-tertiary-700": "137 48 170", // #8930aa
		"--color-tertiary-800": "110 38 136", // #6e2688
		"--color-tertiary-900": "90 31 111", // #5a1f6f
		// success | #6ecf84 
		"--color-success-50": "233 248 237", // #e9f8ed
		"--color-success-100": "226 245 230", // #e2f5e6
		"--color-success-200": "219 243 224", // #dbf3e0
		"--color-success-300": "197 236 206", // #c5ecce
		"--color-success-400": "154 221 169", // #9adda9
		"--color-success-500": "110 207 132", // #6ecf84
		"--color-success-600": "99 186 119", // #63ba77
		"--color-success-700": "83 155 99", // #539b63
		"--color-success-800": "66 124 79", // #427c4f
		"--color-success-900": "54 101 65", // #366541
		// warning | #dbce1f 
		"--color-warning-50": "250 248 221", // #faf8dd
		"--color-warning-100": "248 245 210", // #f8f5d2
		"--color-warning-200": "246 243 199", // #f6f3c7
		"--color-warning-300": "241 235 165", // #f1eba5
		"--color-warning-400": "230 221 98", // #e6dd62
		"--color-warning-500": "219 206 31", // #dbce1f
		"--color-warning-600": "197 185 28", // #c5b91c
		"--color-warning-700": "164 155 23", // #a49b17
		"--color-warning-800": "131 124 19", // #837c13
		"--color-warning-900": "107 101 15", // #6b650f
		// error | #c70000 
		"--color-error-50": "247 217 217", // #f7d9d9
		"--color-error-100": "244 204 204", // #f4cccc
		"--color-error-200": "241 191 191", // #f1bfbf
		"--color-error-300": "233 153 153", // #e99999
		"--color-error-400": "216 77 77", // #d84d4d
		"--color-error-500": "199 0 0", // #c70000
		"--color-error-600": "179 0 0", // #b30000
		"--color-error-700": "149 0 0", // #950000
		"--color-error-800": "119 0 0", // #770000
		"--color-error-900": "98 0 0", // #620000
		// surface | #dbeafe 
		"--color-surface-50": "250 252 255", // #fafcff
		"--color-surface-100": "248 251 255", // #f8fbff
		"--color-surface-200": "246 250 255", // #f6faff
		"--color-surface-300": "241 247 255", // #f1f7ff
		"--color-surface-400": "230 240 254", // #e6f0fe
		"--color-surface-500": "219 234 254", // #dbeafe
		"--color-surface-600": "197 211 229", // #c5d3e5
		"--color-surface-700": "164 176 191", // #a4b0bf
		"--color-surface-800": "131 140 152", // #838c98
		"--color-surface-900": "107 115 124", // #6b737c
		
	}
}