cube(`PassengerManifest`, {
  sql: `SELECT * FROM public.passenger_manifest`,
  
  joins: {
    Flight: {
      sql: `${CUBE}.flight_id = ${Flight}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [passengerName, id, createdAt]
    }
  },
  
  dimensions: {
    passengerName: {
      sql: `passenger_name`,
      type: `string`
    },
    
    tripPurpose: {
      sql: `trip_purpose`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    age: {
      sql: `age`,
      type: `number`
    },
    ageGroup: {
      sql: `age_group`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    seatAssignment: {
      sql: `seat_assignment`,
      type: `string`
    },
    
    specialHandling: {
      sql: `special_handling`,
      type: `string`
    },
    
    passport: {
      sql: `passport`,
      type: `string`
    },
    
    nationality: {
      sql: `nationality`,
      type: `string`
    },
    
    ticketNo: {
      sql: `ticket_no`,
      type: `string`
    },
    
    class: {
      sql: `class`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }

});
