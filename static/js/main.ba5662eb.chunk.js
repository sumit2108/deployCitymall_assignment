(this.webpackJsonpcitymall_assignment=this.webpackJsonpcitymall_assignment||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),c=a.n(r),l=(a(25),a(5)),o=a(14),s=(a(26),a(9)),d=(a(19),a(20),a(1)),u=function(e){return Object(d.jsx)("div",{className:"ag-theme-alpine",style:{height:400,width:"100%"},children:Object(d.jsx)(s.AgGridReact,{rowData:e.rows,columnDefs:e.columns,rowSelection:"multiple",onSelectionChanged:function(t){e.setSelectedRows(t.api.getSelectedRows())},onGridReady:function(t){e.setgridApi(t.api)}})})},b=function(e){var t=function(){localStorage.setItem("data",JSON.stringify(e.staticData))};return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("button",{onClick:function(){var t=e.addNewRow;t.id=e.data.rows.length+1;var a=e.data.rows;a.push(t),e.setData({rows:a}),e.gridApi.setRowData(e.data.rows)},children:"Add Row"}),Object(d.jsx)("button",{onClick:function(){e.gridApi.applyTransaction({remove:e.selectedRows})},children:"Delete Selected Rows"}),Object(d.jsx)("button",{onClick:function(){var t=e.selectedRows,a=e.data.rows;t.map((function(e){return a=a.filter((function(t){return e.id!==t.id})),e})),e.gridApi.applyTransaction({remove:a})},children:"Delete Non Selected Rows"}),Object(d.jsx)("button",{onClick:function(){e.setSubmit(!0);var a=[];e.gridApi.forEachNode((function(t){a.push(t.data),e.setNonEditableRows(a)})),e.setStaticData({columns:e.nonEditableColumns,rows:e.nonEditableRows}),e.setData({rows:e.staticData}),t()},children:" Submit"})]})},m=function(e){return Object(d.jsx)("div",{className:"ag-theme-alpine",style:{height:400,width:"100%"},children:Object(d.jsx)(s.AgGridReact,{rowData:e.rows,columnDefs:e.columns})})},j=[{id:1,name:"Sumit",email:"mastersumit@gmail.com",city:"kanpur"},{id:2,name:"Mohit",email:"mastermohit@gmail.com",city:"kanpur"},{id:3,name:"Sourabh",email:"mastersourabh@gmail.com",city:"kanpur"}];var h=function(){Object(i.useEffect)((function(){G()}),[]);var e=[{headerName:"Id",field:"id",sortable:!0,editable:!0,checkboxSelection:!0,cellStyle:I},{headerName:"Name",field:"name",sortable:!0,editable:!0,cellStyle:I},{headerName:"Email",field:"email",sortable:!0,editable:!0,cellStyle:function(e){if(""===e.value&&!0===D)return{background:"yellow"}}},{headerName:"Gender",field:"gender",editable:!0,cellRendererFramework:function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("select",{name:"gender",children:[Object(d.jsx)("option",{children:"Male"}),Object(d.jsx)("option",{children:"Female"})]})})}},{headerName:"DOB",field:"dob",editable:!0,cellRendererFramework:function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"date",name:"date"})})}},{headerName:"Country",field:"country",sortable:!0,editable:!0,cellRendererFramework:function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("select",{name:"gender",children:[Object(d.jsx)("option",{children:"India"}),Object(d.jsx)("option",{children:"Russia"}),Object(d.jsx)("option",{children:" Japan"})]})})}},{headerName:"City",field:"city",sortable:!0,editable:!0,cellStyle:I},{headerName:"",field:"",cellRendererFramework:function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("i",{className:"far fa-trash-alt",onClick:function(){var t=n.rows.filter((function(t){return t.id!==e.data.id}));r(Object(o.a)(Object(o.a)({},n),{},{rows:t})),console.log(n)}})})}}],t=Object(i.useState)({rows:j}),a=Object(l.a)(t,2),n=a[0],r=a[1],c=Object(i.useState)([]),s=Object(l.a)(c,2),h=s[0],f=s[1],O=Object(i.useState)([]),w=Object(l.a)(O,2),g=w[0],p=w[1],S=Object(i.useState)({columns:[],rows:[]}),N=Object(l.a)(S,2),x=N[0],y=N[1],R=Object(i.useState)(!1),v=Object(l.a)(R,2),D=v[0],k=v[1],C=Object(i.useState)([]),A=Object(l.a)(C,2),E=A[0],F=A[1];function I(e){if(""===e.value&&!0===D)return{background:"red"}}var G=function(){if(null===localStorage.getItem("data"))localStorage.setItem("data",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("data"));y(e)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{setData:r,data:n,addNewRow:{id:"id",name:"",email:"",gender:"",dob:"",country:"",city:""},gridApi:h,selectedRows:g,setSelectedRows:p,nonEditableColumns:[{headerName:"Id",field:"id",sortable:!0,editable:!0},{headerName:"Name",field:"name",sortable:!0},{headerName:"Email",field:"email",sortable:!0},{headerName:"Gender",field:"gender"},{headerName:"DOB",field:"dob"},{headerName:"Country",field:"country",sortable:!0},{headerName:"City",field:"city",sortable:!0}],setStaticData:y,staticData:x,nonEditableRows:E,setNonEditableRows:F,setSubmit:k}),Object(d.jsx)(u,{setSelectedRows:p,rows:n.rows,columns:e,setgridApi:f}),Object(d.jsx)("h1",{children:"Submitted Grid"}),Object(d.jsx)(m,{rows:x.rows,columns:x.columns})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),f()}},[[53,1,2]]]);
//# sourceMappingURL=main.ba5662eb.chunk.js.map