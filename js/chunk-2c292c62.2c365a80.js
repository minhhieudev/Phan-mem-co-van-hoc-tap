(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c292c62"],{"11a2":function(t,e,a){"use strict";a.r(e);a("386d");var n,i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Consultant custom-scroll-cv ml-3"},[e("el-card",[e("h4",{staticClass:"font-weight-bold text-success text-center mb-3"},[t._v("DANH SÁCH CỐ VẤN")]),e("div",{staticClass:"action-cv justify-content-between mb-2"},[e("div",{staticClass:"d-flex justify-content-start"},[e("div",{staticClass:"d-flex align-items-center p-2",staticStyle:{color:"rgb(1, 6, 12)"}},[e("i",{staticClass:"fa-solid fa-rotate-right",on:{click:t.resetFilters}}),e("div",{staticClass:"d-flex align-items-center ml-5 border-right"},[e("i",{staticClass:"fa-solid fa-filter mr-3",staticStyle:{color:"rgb(20, 197, 197)"}}),e("el-select",{staticClass:"custom-input-cv",attrs:{placeholder:"Khoa",filterable:""},model:{value:t.selectedKhoa,callback:function(e){t.selectedKhoa=e},expression:"selectedKhoa"}},t._l(t.khoaLists,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)]),e("div",{staticClass:"d-flex align-items-center p-2"},[e("el-input",{staticClass:"search-input",attrs:{size:"medium",placeholder:"Tìm theo tên, email..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("el-button",{staticClass:"ml-2",attrs:{icon:"el-icon-search",type:"success",circle:""}})],1)]),e("el-button",{attrs:{type:"success",round:"",size:"medium"},on:{click:function(e){return t.goToAddNewPage()}}},[t._v("Tạo mới")])],1),e("div",{staticStyle:{"max-height":"71vh","overflow-y":"auto"}},[e("el-table",{staticClass:"custom-table",staticStyle:{width:"100%"},attrs:{data:t.currentPageData}},[e("el-table-column",{attrs:{label:"STT",width:"50"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.$index;a.row;return[e("span",[t._v(t._s(n+1+(t.pagination.current_page-1)*t.pagination.page_size))])]}}])}),e("el-table-column",{attrs:{prop:"fullName",label:"Tên cố vấn",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n             "+t._s(a.fullName)+"\n           ")]}}])}),e("el-table-column",{attrs:{prop:"email",label:"Email",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n             "+t._s(a.email)+"\n           ")]}}])}),e("el-table-column",{attrs:{prop:"position",label:"Chức vụ/chức danh, đơn vị",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n             "+t._s(a.position)+"\n           ")]}}])}),e("el-table-column",{attrs:{prop:"mission",label:"Nhiệm vụ",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n             "+t._s(a.mission)+"\n           ")]}}])}),e("el-table-column",{attrs:{label:"Thao tác",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small",circle:""},on:{click:function(e){return e.preventDefault(),t.gotoDetail(n)}}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small",circle:""},on:{click:function(e){return e.preventDefault(),t.confirmDelete(n)}}})]}}])})],1)],1),e("div",{staticClass:"mt-2"},[e("el-pagination",{attrs:{background:"",layout:"jumper, prev, pager, next, sizes, total","page-sizes":[10,25,50,100],"page-size":t.pagination.page_size,total:t.filteredTableData.length,"current-page":t.pagination.current_page},on:{"update:pageSize":function(e){return t.$set(t.pagination,"page_size",e)},"update:page-size":function(e){return t.$set(t.pagination,"page_size",e)},"update:currentPage":function(e){return t.$set(t.pagination,"current_page",e)},"update:current-page":function(e){return t.$set(t.pagination,"current_page",e)},"current-change":t.handleCurrentPageChange,"size-change":t.handlePageSizeChange}})],1)])],1)},c=[],r=a("ade3"),o=(a("6762"),a("2fdb"),a("d25f"),a("6080")),s=a("49e5"),l=a("b166"),u=(a("15f5"),"consultant"),d={data:function(){return{tableData:[],pagination:{current_page:1,page_size:10},totalData:0,search:"",selectedKhoa:"",khoaLists:[]}},created:function(){this.loadData(),this.fetchClassLists()},computed:{filteredTableData:function(){var t=this;return this.tableData.filter((function(e){return(!t.search||e.fullName.toLowerCase().includes(t.search.toLowerCase())||e.email.toLowerCase().includes(t.search.toLowerCase()))&&(!t.selectedKhoa||e.department===t.selectedKhoa)}))},currentPageData:function(){var t=(this.pagination.current_page-1)*this.pagination.page_size,e=t+this.pagination.page_size;return this.filteredTableData.slice(t,e)}},methods:(n={goToAddNewPage:function(){this.$router.push({name:"".concat(u,"_new")})},gotoDetail:function(t){this.$router.push({name:"".concat(u,"_edit"),params:{id:t._id}})},confirmDelete:function(t){var e=this;this.$confirm("Xác nhận xóa ".concat(u,"?"),"Cảnh báo",{confirmButtonText:"Xóa",type:"warning"}).then((function(){Object(o["d"])(t._id).then((function(t){var a=t.data;a.success&&e.loadData()})).finally((function(){e.$wrLoading(!1)}))})).catch()},loadData:function(){var t=this;Object(o["a"])().then((function(e){e&&e.data&&e.data.success?t.tableData=e.data.consultants:console.error("Không thành công: ",e.data)})).catch((function(t){console.error("Lỗi khi tải điểm rèn luyện: ",t)}))},handlePageSizeChange:function(){this.pagination.current_page=1,this.loadData()},formatDate:function(t){return Object(l["a"])(new Date(t),"dd/MM/yyyy ")},resetFilters:function(){this.selectedKhoa="",this.search=""},fetchClassLists:function(){var t=this;Object(s["e"])().then((function(e){t.khoaLists=e.data.khoaLists})).catch((function(t){console.error("Error fetching Khoa list:",t)}))}},Object(r["a"])(n,"handlePageSizeChange",(function(t){this.pagination.page_size=t,this.pagination.current_page=1})),Object(r["a"])(n,"handleCurrentPageChange",(function(t){this.pagination.current_page=t})),n)},f=d,h=(a("3f59"),a("0c7c")),p=Object(h["a"])(f,i,c,!1,null,null,null);e["default"]=p.exports},"386d":function(t,e,a){"use strict";var n=a("cb7c"),i=a("83a1"),c=a("5f1b");a("214f")("search",1,(function(t,e,a,r){return[function(a){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=r(a,t,this);if(e.done)return e.value;var o=n(t),s=String(this),l=o.lastIndex;i(l,0)||(o.lastIndex=0);var u=c(o,s);return i(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},"3f59":function(t,e,a){"use strict";a("8eed")},6080:function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return l}));a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("ade3");var n=a("b775");var i="consultant";function c(){return Object(n["a"])({url:"/".concat(i),method:"get"})}function r(t){return Object(n["a"])({url:"/".concat(i,"/").concat(t),method:"delete"})}function o(t){return Object(n["a"])({url:"/".concat(i,"/").concat(t),method:"get"})}function s(t){return Object(n["a"])({url:"/".concat(i),method:"post",data:t})}function l(t){var e=t.email;return Object(n["a"])({url:"/".concat(i,"/get-fullName/").concat(encodeURIComponent(e)),method:"get"})}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8eed":function(t,e,a){}}]);