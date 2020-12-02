cube(`Airline`, {
  sql: `SELECT * FROM public.airline`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [headerquarterCountry, id, headquarterCity, name, createdAt]
    },
    
    aircraftQuantity: {
      sql: `aircraft_quantity`,
      type: `sum`
    }
  },
  
  dimensions: {
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
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
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
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    relationshipSince: {
      sql: `relationship_since`,
      type: `time`
    }
  }

});
