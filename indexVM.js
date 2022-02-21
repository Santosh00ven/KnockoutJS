/*const pqOptions = {
    width: "auto",
    height: 250,
    showTitle: false,
    showHeader: true,
    showTop: true,
    showToolbar: false,
    showBottom: true,
    wrap: true,
    hwrap: false,
    sortable: false,
    editable: false,
    resizable: false,
    collapsible: false,
    draggable: true, dragColumns: { enabled: true },
    scrollModel: { autoFit: true },
    numberCell: { show: true, resizable: true, title: "S.N.", minWidth: 30 },
    pageModel: { curPage: 1, rPP: 10, type: "local" },
    columnTemplate: { wrap: true, editable: false, dataType: "string", halign: "center", hvalign: "center", resizable: true, styleHead: { 'font-weight': "bold" } },
};*/

function IndexVM() {
    const self = this;

    var isNullOrEmpty = function (str) {
        if (str === undefined || str === null) {
            return true;
        } else if (typeof str === "string") {
            return (str.trim() === "");
        } else {
            return false;
        }
    };

    const models = {
        MyModel: function (item) {
            item = item || {};
            this.fname = ko.observable(item.fname || "");
            this.lname = ko.observable(item.lname || "");
            this.dob = ko.observable(item.dob || "");
            this.email = ko.observable(item.email || "");
            this.address = ko.observable(item.address || "");
            
            this.qualification=ko.observable(false),
            this.level=ko.observable();  

            this.GenderId = ko.observable(item.GenderId || "");
            this.GenderName = ko.observable(item.GenderName || "");


        },
        UiElements: function () {
            self.MyModel = ko.observable(new models.MyModel());
            self.DataList = ko.observableArray([]); 
            self.GenderList = ko.observableArray([
                { Text: 'Male', Value: '1' },
                { Text: 'Female', Value: '0' }]);
        },
    };

    self.SaveInformation = function () {

        if (UiEvents.validate.SaveValidation()) {
            // UiEvents.functions.Save("demoGrid");
        }
    };

      const UiEvents = {
          validate: {
              SaveValidation: function () {
                  if (isNullOrEmpty(self.MyModel().fname())) {
                    Swal.fire({
                        icon: 'error',
                        text: 'First Name cannot be empty..!',
                        width: '450px   '
                        
                      })
                      return false;
                  }
                  else if (isNullOrEmpty(self.MyModel().lname())) {
                      alert("Warning! - Last Name cannot be empty....!!");
                      return false;
                    }
                    else if (isNullOrEmpty(self.MyModel().dob())) { 
                        alert("Warning! - Date of birth cannot be empty....!!");
                        return false;
                      
                  /* }
                  else if (isNullOrEmpty(self.MyModel().Age()) || (parseInt(self.MyModel().Age()) <= 0)) {
                      alert("Warning! - Age Must be greater than 0...!!!");
                      return false;
                  }
                  else if (isNullOrEmpty(self.MyModel().GenderId())) {
                      alert("Warning! - Gender cannot be empty...!!!");
                      return false;
                  }
                  else {
  
                      self.MyModel().GenderName((self.GenderList().find(X => X.Value == self.MyModel().GenderId()) || {}).Text);
                      self.DataList.push(ko.toJS(self.MyModel()));
                      return true;*/
                  }
              }
          },
          clear: {
              ResetAll: function () {
                  self.MyModel(new models.MyModel());
                  self.DataList([]);
              },
          },
         /* functions: {
              Save: function (control) {
                  if ($("#" + control).pqGrid("instance")) {
                      // $("#" + control).pqGrid("destroy");
                      $("#" + control).pqGrid('option', 'dataModel.data', ko.toJS(self.DataList()));
                      $("#" + control).pqGrid('refreshDataAndView');
                  } else
                   {
                      const options = Object.assign({}, pqOptions);
                      options.colModel = [
                          { title: "Name", align: "left", dataIndx: "Name", width: "50%" },
                          { title: "Age", align: "center", dataIndx: "Age", width: "20%" },
                          { title: "Gender", align: "Center", dataIndx: "GenderName", width: "30%" },
                      ];
  
                      options.dataModel = { data: ko.toJS(self.DataList()) };
                      options.showBottom = false;
                      $("#" + control).pqGrid(options);
                  }
              }
          },*/
  
      };

    function Init() {
        models.UiElements();
        //  UiEvents.clear.ResetAll();
        // UiEvents.functions.Save("demoGrid");
    }
    Init();
}

var obj;

$(document).ready(function () {
    obj = new IndexVM();
    ko.applyBindings(obj);

});