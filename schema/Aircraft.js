cube(`Aircraft`, {
  sql: `SELECT * FROM public.aircraft`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.aircraft`
  },
  
  joins: {
    Airline: {
      sql: `${CUBE}.airline_id = ${Airline}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },*/
    /*
    firstClass: {
      sql: `first_class`,
      type: `sum`
    },
    
    businessClass: {
      sql: `business_class`,
      type: `sum`
    },
    
    premiumEconomyClass: {
      sql: `premium_economy_class`,
      type: `sum`
    },
    
    economyClass: {
      sql: `economy_class`,
      type: `sum`
    } */
  },
  
  dimensions: {
    
    /*
    tail: {
      sql: `tail`,
      type: `string`
    }, */
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
/*
    createdAt: {
      sql: `created_at`,
      type: `time`
    }, */

    /*

    ifeType: {
      sql: `ife_type`,
      type: `string`
    },
    
    aircraftType: {
      sql: `aircraft_type`,
      type: `string`
    },
    
    serviceSince: {
      sql: `service_since`,
      type: `time`
    }
    */
  }
});
