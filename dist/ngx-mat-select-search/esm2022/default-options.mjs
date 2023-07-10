"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAT_SELECTSEARCH_DEFAULT_OPTIONS = exports.configurableDefaultOptions = void 0;
const core_1 = require("@angular/core");
/** List of inputs of NgxMatSelectSearchComponent that can be configured with a global default. */
exports.configurableDefaultOptions = [
    'ariaLabel',
    'clearSearchInput',
    'closeIcon',
    'closeSvgIcon',
    'disableInitialFocus',
    'disableScrollToActiveOnOptionsChanged',
    'enableClearOnEscapePressed',
    'hideClearSearchButton',
    'noEntriesFoundLabel',
    'placeholderLabel',
    'preventHomeEndKeyPropagation',
    'searching',
];
/**
 * InjectionToken that can be used to specify global options. e.g.
 *
 * ```typescript
 * providers: [
 *   {
 *     provide: MAT_SELECTSEARCH_DEFAULT_OPTIONS,
 *     useValue: <MatSelectSearchOptions>{
 *       closeIcon: 'delete',
 *       noEntriesFoundLabel: 'No options found'
 *     }
 *   }
 * ]
 * ```
 *
 * See the corresponding inputs of `MatSelectSearchComponent` for documentation.
 */
exports.MAT_SELECTSEARCH_DEFAULT_OPTIONS = new core_1.InjectionToken('mat-selectsearch-default-options');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RlZmF1bHQtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0M7QUFHL0Msa0dBQWtHO0FBQ3JGLFFBQUEsMEJBQTBCLEdBQUc7SUFDeEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixXQUFXO0NBQ0gsQ0FBQztBQUlYOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ1UsUUFBQSxnQ0FBZ0MsR0FBRyxJQUFJLHFCQUFjLENBQXlCLGtDQUFrQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL21hdC1zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudCc7XHJcblxyXG4vKiogTGlzdCBvZiBpbnB1dHMgb2YgTmd4TWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50IHRoYXQgY2FuIGJlIGNvbmZpZ3VyZWQgd2l0aCBhIGdsb2JhbCBkZWZhdWx0LiAqL1xyXG5leHBvcnQgY29uc3QgY29uZmlndXJhYmxlRGVmYXVsdE9wdGlvbnMgPSBbXHJcbiAgJ2FyaWFMYWJlbCcsXHJcbiAgJ2NsZWFyU2VhcmNoSW5wdXQnLFxyXG4gICdjbG9zZUljb24nLFxyXG4gICdjbG9zZVN2Z0ljb24nLFxyXG4gICdkaXNhYmxlSW5pdGlhbEZvY3VzJyxcclxuICAnZGlzYWJsZVNjcm9sbFRvQWN0aXZlT25PcHRpb25zQ2hhbmdlZCcsXHJcbiAgJ2VuYWJsZUNsZWFyT25Fc2NhcGVQcmVzc2VkJyxcclxuICAnaGlkZUNsZWFyU2VhcmNoQnV0dG9uJyxcclxuICAnbm9FbnRyaWVzRm91bmRMYWJlbCcsXHJcbiAgJ3BsYWNlaG9sZGVyTGFiZWwnLFxyXG4gICdwcmV2ZW50SG9tZUVuZEtleVByb3BhZ2F0aW9uJyxcclxuICAnc2VhcmNoaW5nJyxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCB0eXBlIENvbmZpZ3VyYWJsZURlZmF1bHRPcHRpb25zID0gdHlwZW9mIGNvbmZpZ3VyYWJsZURlZmF1bHRPcHRpb25zW251bWJlcl07XHJcblxyXG4vKipcclxuICogSW5qZWN0aW9uVG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGdsb2JhbCBvcHRpb25zLiBlLmcuXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogcHJvdmlkZXJzOiBbXHJcbiAqICAge1xyXG4gKiAgICAgcHJvdmlkZTogTUFUX1NFTEVDVFNFQVJDSF9ERUZBVUxUX09QVElPTlMsXHJcbiAqICAgICB1c2VWYWx1ZTogPE1hdFNlbGVjdFNlYXJjaE9wdGlvbnM+e1xyXG4gKiAgICAgICBjbG9zZUljb246ICdkZWxldGUnLFxyXG4gKiAgICAgICBub0VudHJpZXNGb3VuZExhYmVsOiAnTm8gb3B0aW9ucyBmb3VuZCdcclxuICogICAgIH1cclxuICogICB9XHJcbiAqIF1cclxuICogYGBgXHJcbiAqXHJcbiAqIFNlZSB0aGUgY29ycmVzcG9uZGluZyBpbnB1dHMgb2YgYE1hdFNlbGVjdFNlYXJjaENvbXBvbmVudGAgZm9yIGRvY3VtZW50YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTUFUX1NFTEVDVFNFQVJDSF9ERUZBVUxUX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWF0U2VsZWN0U2VhcmNoT3B0aW9ucz4oJ21hdC1zZWxlY3RzZWFyY2gtZGVmYXVsdC1vcHRpb25zJyk7XHJcblxyXG4vKiogR2xvYmFsIGNvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciBNYXRTZWxlY3RTZWFyY2guICovXHJcbmV4cG9ydCB0eXBlIE1hdFNlbGVjdFNlYXJjaE9wdGlvbnMgPSBSZWFkb25seTxQYXJ0aWFsPFBpY2s8TWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50LCBDb25maWd1cmFibGVEZWZhdWx0T3B0aW9ucz4+PjtcclxuIl19