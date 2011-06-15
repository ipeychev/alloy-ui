AUI.add("aui-datatable-edit",function(aw){var ae=aw.Lang,bg=aw.Array,e=ae.isArray,aV=ae.isBoolean,aQ=ae.isFunction,J=ae.isObject,a0=ae.isString,aP=ae.String,aN=aw.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),a6=function(A){return(A instanceof aw.BaseCellEditor);},at=aw.WidgetStdMod,B=aw.getClassName,ag="add",a7="addOption",aO="baseCellEditor",s="boundingBox",S="calendar",ao="cancel",aS="cell",aA="celleditor",D="checkboxCellEditor",p="checked",aK="click",C="columnset",w="contentBox",aG="data",Q="datatable",M="dateCellEditor",an="dd",W="delete",ar="disk",aI="dotted",aR="dropDownCellEditor",N="edit",aa="editable",f="editor",G="editEvent",al="editOptions",I="element",aF="elementName",aT="field",c="grip",F="handle",v="hide",ay="hideOnSave",aj="icon",aJ="id",o="initEdit",bf="initToolbar",ax="initValidator",ac="input",d="inputFormatter",be="key",az="label",au="link",Y="mousedown",ab="multiple",m="name",aX="option",a2="options",u="optionsCellEditor",bb="outputFormatter",l="pencil",am="radioCellEditor",ak="records",k="recordset",bc="remove",a9="rendered",ai="return",n="row",aM="save",ah="saveOptions",aY="selected",aD="selectedAttrName",Z="showToolbar",a1="submit",T="textAreaCellEditor",y="textCellEditor",P="toolbar",z="unescapeValue",X="validator",a5="value",av="vertical",af="visible",a3="wrapper",bj=",",i=".",U="",h="#",a8="\n",bd=" ",t=/<br\s*\/?>/gi,E=/[\r\n]/g,b=B(aA,N),g=B(aA,N,ag,aX),bi=B(aA,N,an,F),aW=B(aA,N,W,aX),ba=B(aA,N,v,aX),aB=B(aA,N,ac,m),aL=B(aA,N,ac,a5),aq=B(aA,N,az),q=B(aA,N,au),aE=B(aA,N,aX,n),R=B(aA,N,aM,aX),V=B(aA,I),aZ=B(aA,az),L=B(aA,aX),x=B(aA,a3),H=B(Q,aa),j=B(aj),ad=B(aj,c,aI,av),aU="<br/>";var a4=function(){};a4.NAME="dataTableCellEditorSupport";a4.ATTRS={editEvent:{setter:"_setEditEvent",validator:a0,value:aK}};aw.mix(a4.prototype,{initializer:function(){var A=this;A.after({render:A._afterRenderEditor});A.on(A.get(G),A._onCellEdit);A.after(A._afterUiSetRecordset,A,"_uiSetRecordset");},getCellEditor:function(bk,bm){var A=this;var bl=bm.get(f);var bn=bk.get(aG).editor;if(bl===false||bn===false){return null;}return bn||bl;},getRecordColumnValue:function(A,bk){return A.getValue(bk.get(aT));},syncEditableColumnsUI:function(){var A=this;var bl=A.get(C);var bk=A.get(k);aw.each(bl.idHash,function(bn){var bm=bn.get(f);if(a6(bm)){aw.all("[headers="+bn.get(aJ)+"]").addClass(H);}});aw.each(bk.get(ak),function(bm){var bn=bm.get(aG).editor;var bo=a6(bn);aw.all(h+bm.get("id")+">td").each(function(br,bp){var bq=bl.getColumn(bp);if(bn===false){br.removeClass(H);}else{if(bo||(bq.get(f)!==false)){br.addClass(H);}}});});},_afterUiSetRecordset:function(bk){var A=this;A.syncEditableColumnsUI();},_afterRenderEditor:function(bk){var A=this;if(!A.events){A.plug(aw.Plugin.DataTableEvents);}},_editCell:function(bo){var A=this;var bq=A.get(C);var bp=A.get(k);var bn=bo.column;var bk=bo.record;A.activeColumnIndex=bq.getColumnIndex(bn);A.activeRecordIndex=bp.getRecordIndex(bk);var bl=bo.alignNode||bo.cell;var bm=A.getCellEditor(bk,bn);if(a6(bm)){if(!bm.get(a9)){bm.on({visibleChange:aw.bind(A._onEditorVisibleChange,A),save:aw.bind(A._onEditorSave,A)});bm.render();}bm.set(a5,A.getRecordColumnValue(bk,bn));bm.show().move(bl.getXY());}},_onCellEdit:function(bk){var A=this;A._editCell(bk);},_onEditorVisibleChange:function(bo){var bk=this;var bm=bk.selection;if(bm){var bl=bm.getActiveRecord();var bn=bm.getActiveColumn();var A=bk.getCellNode(bl,bn);var bp=bk.getRowNode(bl);if(!bo.newVal){bm.select(A,bp);}}},_onEditorSave:function(bm){var A=this;var bl=bm.currentTarget;var bn=A.get(k);bl.set(a5,bm.newVal);var bk=A.selection;if(bk){bn.updateRecordDataByKey(bk.getActiveRecord(),bk.getActiveColumn().get(be),bm.newVal);A.set(k,bn);}},_setEditEvent:function(A){return aS+aN(A);}});aw.DataTable.CellEditorSupport=a4;aw.DataTable.Base=aw.Base.create("dataTable",aw.DataTable.Base,[aw.DataTable.CellEditorSupport]);var r=aw.Component.create({NAME:aO,ATTRS:{editable:{value:false,validator:aV},elementName:{value:a5,validator:a0},footerContent:{value:U},hideOnSave:{value:true,validator:aV},inputFormatter:{value:function(A){if(a0(A)){A=A.replace(E,aU);}return A;}},outputFormatter:{value:function(bk){var A=this;if(a0(bk)){if(A.get(z)){bk=aP.unescapeEntities(bk);}bk=bk.replace(t,a8);}return bk;}},showToolbar:{value:true,validator:aV},strings:{value:{edit:"Edit",save:"Save",cancel:"Cancel"}},tabIndex:{value:1},toolbar:{setter:"_setToolbar",validator:J,value:null},unescapeValue:{value:true,validator:aV},validator:{setter:"_setValidator",validator:J,value:null},value:{value:U},visible:{value:false}},EXTENDS:aw.Overlay,UI_ATTRS:[aa,Z,a5],prototype:{CONTENT_TEMPLATE:"<form></form>",ELEMENT_TEMPLATE:null,elements:null,validator:null,_hDocMouseDownEv:null,initializer:function(bk){var A=this;A._initEvents();},destructor:function(){var bk=this;var A=bk._hDocMouseDownEv;var bm=bk.toolbar;var bl=bk.validator;if(A){A.detach();}if(bm){bm.destroy();}if(bl){bl.destroy();}},bindUI:function(){var A=this;A.get(s).on(be,aw.bind(A._onEscKey,A),"down:27");},formatValue:function(bk,bl){var A=this;if(aQ(bk)){bl=bk.call(A,bl);}return bl;},getValue:function(){var A=this;return A.formatValue(A.get(d),A.getElementsValue());},_initEvents:function(){var A=this;A.publish({cancel:{defaultFn:A._defCancelFn},initEdit:{defaultFn:A._defInitEditFn,fireOnce:true},initValidator:{defaultFn:A._defInitValidatorFn,fireOnce:true},initToolbar:{defaultFn:A._defInitToolbarFn,fireOnce:true},save:{defaultFn:A._defSaveFn}});A.after({render:A._afterRender,visibleChange:aw.debounce(A._debounceVisibleChange,350,A)});A.on({"form-validator:submit":aw.bind(A._onSubmit,A)});},_afterRender:function(){var A=this;A._handleInitValidatorEvent();A._handleInitToolbarEvent();},_defCancelFn:function(bk){var A=this;A.hide();},_defInitValidatorFn:function(bk){var A=this;A.validator=new aw.FormValidator(A.get(X));},_defInitToolbarFn:function(bl){var A=this;var bk=A.get(aa);A.toolbar=new aw.Toolbar(A.get(P)).render(A.footerNode);if(bk){A._uiSetEditable(bk);}},_defSaveFn:function(bk){var A=this;
if(A.get(ay)){A.hide();}},_debounceVisibleChange:function(bl){var bk=this;var A=bk._hDocMouseDownEv;if(bl.newVal){if(!A){bk._hDocMouseDownEv=aw.getDoc().on(Y,aw.bind(bk._onDocMouseDownExt,bk));}}else{if(A){A.detach();bk._hDocMouseDownEv=null;}}},_handleCancelEvent:function(){var A=this;A.fire(ao);},_handleEditEvent:function(){var A=this;A.fire(N);},_handleInitEditEvent:function(){var A=this;if(A.get(a9)){this.fire(o);}},_handleInitValidatorEvent:function(){var A=this;if(A.get(a9)){this.fire(ax);}},_handleInitToolbarEvent:function(){var A=this;if(A.get(a9)&&A.get(Z)){this.fire(bf);}},_handleSaveEvent:function(){var A=this;if(!A.validator.hasErrors()){A.fire(aM,{newVal:A.getValue(),prevVal:A.get(a5)});}},_onDocMouseDownExt:function(bl){var A=this;var bk=A.get(s);A.set(af,bk.contains(bl.target));},_onEscKey:function(bk){var A=this;A.hide();},_onSubmit:function(bl){var A=this;var bk=bl.validator;A._handleSaveEvent();if(bk){bk.formEvent.halt();}},_setToolbar:function(bl){var bk=this;var A=bk.getStrings();return aw.merge({activeState:false,children:[{label:A[aM],icon:ar,type:a1},{handler:aw.bind(bk._handleCancelEvent,bk),label:A[ao]}]},bl);},_setValidator:function(bk){var A=this;return aw.merge({boundingBox:A.get(w),bubbleTargets:A},bk);},_uiSetShowToolbar:function(bl){var A=this;var bk=A.footerNode;if(bl){bk.show();}else{bk.hide();}A._handleInitToolbarEvent();},getElementsValue:function(){var A=this;var bk=A.elements;if(bk){return bk.get(a5);}return U;},renderUI:function(){var A=this;if(A.ELEMENT_TEMPLATE){A.elements=aw.Node.create(A.ELEMENT_TEMPLATE);A._syncElementsName();A.setStdModContent(at.BODY,A.elements);}},_defInitEditFn:function(A){},_syncElementsFocus:function(){var A=this;A.elements.selectText();},_syncElementsName:function(){var A=this;A.elements.setAttribute(m,A.get(aF));},_syncFocus:function(){var A=this;aw.later(10,A,A._syncElementsFocus);},_uiSetEditable:function(bl){var A=this;var bk=A.toolbar;if(A.get(a9)&&bk){if(bl){bk.add({handler:aw.bind(A._handleEditEvent,A),icon:l,label:A.getString(N)},1);}else{bk.remove(1);}}},_uiSetValue:function(bl){var A=this;var bk=A.elements;if(bk){bk.val(A.formatValue(A.get(bb),bl));}A._syncFocus();}}});aw.BaseCellEditor=r;var bh=aw.Component.create({NAME:u,ATTRS:{inputFormatter:{value:null},options:{setter:"_setOptions",value:{},validator:J},outputFormatter:{value:null},selectedAttrName:{value:aY,validator:a0},strings:{value:{add:"Add",cancel:"Cancel",addOption:"Add option",edit:"Edit options",editOptions:"Edit option(s)",name:"Name",remove:"Remove",save:"Save",saveOptions:"Save options",stopEditing:"Stop editing",value:"Value"}}},EXTENDS:aw.BaseCellEditor,UI_ATTRS:[a2],prototype:{EDIT_TEMPLATE:'<div class="'+b+'"></div>',EDIT_OPTION_ROW_TEMPLATE:'<div class="'+aE+'">'+'<span class="'+[bi,j,ad].join(bd)+'"></span>'+'<input class="'+aB+'" size="7" placeholder="{titleName}" title="{titleName}" type="text" value="{valueName}" /> '+'<input class="'+aL+'" size="7" placeholder="{titleValue}" title="{titleValue}" type="text" value="{valueValue}" /> '+'<a class="'+[q,aW].join(bd)+'" href="javascript:void(0);">{remove}</a> '+"</div>",EDIT_ADD_LINK_TEMPLATE:'<a class="'+[q,g].join(bd)+'" href="javascript:void(0);">{addOption}</a> ',EDIT_LABEL_TEMPLATE:'<div class="'+aq+'">{editOptions}</div>',EDIT_SAVE_LINK_TEMPLATE:'<a class="'+[q,R].join(bd)+'" href="javascript:void(0);">{saveOptions}</a> ',editContainer:null,editSortable:null,options:null,initializer:function(){var A=this;A.on(N,A._onEditEvent);A.on(aM,A._onSave);A.after(bf,A._afterInitToolbar);},addNewOption:function(bl,bn){var A=this;var bm=A.editContainer.all(i+aE).last();var bk=aw.Node.create(A._createEditOption(bl||U,bn||U));bm.placeAfter(bk);bk.one(ac).focus();},removeOption:function(A){A.remove();},saveOptions:function(){var A=this;var bn=A.editContainer;if(bn){var bm=bn.all(i+aB);var bk=bn.all(i+aL);var bl={};bm.each(function(bq,bp){var bo=bq.val();var br=bk.item(bp).val();if(bo&&br){bl[br]=bo;}});A.set(a2,bl);A._uiSetValue(A.get(a5));A.toggleEdit();}},toggleEdit:function(){var A=this;A.editContainer.toggle();},_createOptions:function(bl){var bp=this;var A=bp.elements;var bn=[];var bk=[];var bm=bp.OPTION_TEMPLATE;var bq=bp.OPTION_WRAPPER;aw.each(bl,function(bu,bt){var bs={id:aw.guid(),label:bu,name:bt,value:bt};if(bm){bn.push(aw.substitute(bm,bs));}if(bq){bk.push(aw.substitute(bq,bs));}});var br=aw.NodeList.create(bn.join(U));var bo=aw.NodeList.create(bk.join(U));if(bo.size()){bo.each(function(bt,bs){bt.prepend(br.item(bs));});A.setContent(bo);}else{A.setContent(br);}bp.options=br;},_createEditBuffer:function(){var bk=this;var A=bk.getStrings();var bl=[];bl.push(ae.sub(bk.EDIT_LABEL_TEMPLATE,{editOptions:A[al]}));aw.each(bk.get(a2),function(bm,bn){bl.push(bk._createEditOption(bm,bn));});bl.push(ae.sub(bk.EDIT_ADD_LINK_TEMPLATE,{addOption:A[a7]}));bl.push(ae.sub(bk.EDIT_SAVE_LINK_TEMPLATE,{saveOptions:A[ah]}));return bl.join(U);},_createEditOption:function(bl,bm){var bk=this;var A=bk.getStrings();return ae.sub(bk.EDIT_OPTION_ROW_TEMPLATE,{remove:A[bc],titleName:A[m],titleValue:A[a5],valueName:bl,valueValue:bm});},_defInitEditFn:function(bk){var A=this;var bl=aw.Node.create(A.EDIT_TEMPLATE);bl.delegate("click",aw.bind(A._onEditLinkClickEvent,A),i+q);bl.delegate("keydown",aw.bind(A._onEditKeyEvent,A),ac);A.editContainer=bl;A.setStdModContent(at.BODY,bl.hide(),at.AFTER);A.editSortable=new aw.Sortable({container:bl,handles:[i+bi],nodes:i+aE,opacity:".3"}).delegate.dd.plug(aw.Plugin.DDConstrained,{constrain:bl,stickY:true});A._syncEditOptionsUI();},_getSelectedOptions:function(){var A=this;var bk=[];A.options.each(function(bl){if(bl.get(A.get(aD))){bk.push(bl);}});return aw.all(bk);},_onEditEvent:function(bk){var A=this;A._handleInitEditEvent();A.toggleEdit();A._syncEditOptionsUI();},_onEditLinkClickEvent:function(bk){var A=this;var bl=bk.currentTarget;if(bl.test(i+g)){A.addNewOption();}else{if(bl.test(i+R)){A.saveOptions();}else{if(bl.test(i+ba)){A.toggleEdit();}else{if(bl.test(i+aW)){A.removeOption(bl.ancestor(i+aE));
}}}}bk.halt();},_onEditKeyEvent:function(bk){var A=this;var bl=bk.currentTarget;if(bk.isKey(ai)){var bm=bl.next(ac);if(bm){bm.selectText();}else{A.addNewOption();}bk.halt();}},_onSave:function(bk){var A=this;A.saveOptions();},_setOptions:function(bk){var A={};if(e(bk)){bg.each(bk,function(bl){A[bl]=bl;});}else{if(J(bk)){A=bk;}}return A;},_syncEditOptionsUI:function(){var A=this;A.editContainer.setContent(A._createEditBuffer());},_uiSetOptions:function(bk){var A=this;A._createOptions(bk);A._syncElementsName();},_uiSetValue:function(bl){var A=this;var bk=A.options;if(bk&&bk.size()){bk.set(A.get(aD),false);bg.each(bg(bl),function(bm){bk.filter('[value="'+bm+'"]').set(A.get(aD),true);});}A._syncFocus();return bl;}}});aw.BaseOptionsCellEditor=bh;var aC=aw.Component.create({NAME:y,EXTENDS:aw.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input class="'+V+'" type="text" />'}});aw.TextCellEditor=aC;var aH=aw.Component.create({NAME:T,EXTENDS:aw.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<textarea class="'+V+'"></textarea>'}});aw.TextAreaCellEditor=aH;var O=aw.Component.create({NAME:aR,ATTRS:{multiple:{value:false,validator:aV}},EXTENDS:aw.BaseOptionsCellEditor,UI_ATTRS:[ab],prototype:{ELEMENT_TEMPLATE:'<select class="'+V+'"></select>',OPTION_TEMPLATE:'<option value="{value}">{label}</option>',getElementsValue:function(){var A=this;if(A.get(ab)){return A._getSelectedOptions().get(a5);}return A.elements.get(a5);},_syncElementsFocus:function(){var A=this;A.elements.focus();},_uiSetMultiple:function(bl){var A=this;var bk=A.elements;if(bl){bk.setAttribute(ab,ab);}else{bk.removeAttribute(ab);}}}});aw.DropDownCellEditor=O;var ap=aw.Component.create({NAME:D,ATTRS:{selectedAttrName:{value:p}},EXTENDS:aw.BaseOptionsCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+V+'"></div>',OPTION_TEMPLATE:'<input class="'+L+'" id="{id}" name="{name}" type="checkbox" value="{value}"/>',OPTION_WRAPPER:'<label class="'+x+'" for="{id}"><span class="'+aZ+'">{label}</span></label>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(a5);},_syncElementsFocus:function(){var A=this;var bk=A.options;if(bk&&bk.size()){bk.item(0).focus();}}}});aw.CheckboxCellEditor=ap;var K=aw.Component.create({NAME:am,EXTENDS:aw.CheckboxCellEditor,prototype:{OPTION_TEMPLATE:'<input class="aui-field-input-choice" id="{id}" name="{name}" type="radio" value="{value}"/>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(a5)[0];},_syncElementsName:function(){var A=this;var bk=A.options;if(bk){bk.setAttribute(m,A.get(aF));}}}});aw.RadioCellEditor=K;var a=aw.Component.create({NAME:M,EXTENDS:aw.BaseCellEditor,ATTRS:{bodyContent:{value:U},calendar:{setter:"_setCalendar",validator:J,value:null}},prototype:{ELEMENT_TEMPLATE:'<input class="'+V+'" type="hidden" />',initializer:function(){var A=this;A.on("calendar:select",aw.bind(A._onDateSelect,A));},getElementsValue:function(){var A=this;return A.calendar.getFormattedSelectedDates().join(bj);},_afterRender:function(){var A=this;aw.DateCellEditor.superclass._afterRender.apply(A,arguments);A.calendar=new aw.Calendar(A.get(S)).render(A.bodyNode);},_onDateSelect:function(bk){var A=this;A.elements.val(bk.date.formatted.join(bj));},_setCalendar:function(bk){var A=this;return aw.merge({bubbleTargets:A},bk);},_uiSetValue:function(bl){var A=this;var bk=A.calendar;if(bk){if(bl&&a0(bl)){bl=bl.split(bj);}A.calendar.set("dates",bl);}}}});aw.DateCellEditor=a;},"@VERSION@",{requires:["aui-calendar","aui-datatable-events","aui-toolbar","aui-form-validator","overlay","sortable"],skinnable:true});