export interface ITableProps {
    loading: boolean;
    items: any;
    page: number;
    rowsPerPage: number;
    tableRows: any;
    onChangePage?: any;
    onChangeRowsPerPage?: any;
    headerRender: any;
    onSearchBoxExecute: any;
    headerText?: string;
    actionsRender?: any;
    searchBoxSelectionValues?: any[];
    limitPage?: boolean;
    hidePagination?: boolean;
    advanceSearch?: boolean;
    advanceSearchForm?: any;
    locales?: any;
  }
  