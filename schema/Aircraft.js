cube(`Aircraft`, {
  sql: `SELECT * FROM public.aircraft`,
  
  joins: {
    Airline: {
      sql: `${CUBE}.airline_id = ${Airline}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    tail: {
      sql: `tail`,
      type: `string`
    },
    
    aircraftType: {
      sql: `aircraft_type`,
      type: `string`
    },
    
    ifeType: {
      sql: `ife_type`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    serviceSince: {
      sql: `service_since`,
      type: `time`
    }
  }
});
