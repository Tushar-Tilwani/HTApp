angular.module('starter.services', [])

.factory('Medicines', function() {
  // Might use a resource here that returns a JSON array


var me = {
   "patientId":"a",
   "patientName":"SpiderMan",
   "medicines":[
      {
         "medicineId":"med01",
         "doctorId":"doc01",
         "time":[
            "10:00",
            "15:00",
            "20:00"
         ],
         "days":[
            "Mon",
            "Wed",
            "Fri"
         ],
         "startDate":"2016-04-10",
         "endDate":"2016-04-30"
      },
      {
         "medicineId":"med02",
         "doctorId":"doc03",
         "time":[
            "10:00",
            "15:00",
            "20:00"
         ],
         "days":[
            "Tues",
            "Thurs"
         ],
         "startDate":"2016-04-10",
         "endDate":"2016-04-30"
      }
   ]
}

var medicines = me.medicines;
  return {
    myName: function(){
      return me.patientName
    },
    all: function() {
      return medicines;
    },
    remove: function(medicine) {
      medicines.splice(medicines.indexOf(Medicine), 1);
    },
    get: function(medicineId) {
      for (var i = 0; i < medicines.length; i++) {
        if (medicines[i].medicineId == medicineId) {
          return medicines[i];
        }
      }
      return null;
    }
  };
});
