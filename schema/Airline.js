cube(`Airline`, {
  sql: `SELECT * FROM public.airline`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.airline`
  },
  
  joins: {
    
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [headerquarterCountry, id, headquarterCity, name, createdAt]
    }, */
    
    fleetSize: {
      sql: `fleet_size`,
      type: `sum`
    }
  },
  
  dimensions: {
    
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    name: {
      sql: `name`,
      type: `string`
    },
/*
    createdAt: {
      sql: `created_at`,
      type: `time`
    }, */
/*
    headerquarterCountry: {
      sql: `headerquarter_country`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    headerquarterState: {
      sql: `headerquarter_state`,
      type: `string`
    },
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    contactPhone: {
      sql: `contact_phone`,
      type: `string`
    },
    
    realtionship: {
      sql: `realtionship`,
      type: `string`
    },
    
    headquarterCity: {
      sql: `headquarter_city`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    relationshipSince: {
      sql: `relationship_since`,
      type: `time`
    } 
    */
  },
  segments: {
    americanAirlines: {
      sql: `${CUBE}.name = 'American Airlines'`
    },
    southWestAirlines: {
      sql: `${CUBE}.name = 'Southwest Airlines'`
    },
    airNewZealand: {
      sql: `${CUBE}.name = 'Air New Zealand'`
    },
    emiratesAirline: {
      sql: `${CUBE}.name = 'Emirates Airline'`
    }
  },

});
