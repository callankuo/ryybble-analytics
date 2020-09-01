cube(`Airline`, {
  sql: `SELECT * FROM public.airline`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, airlineName, headquarterCity, headerquarterCountry, createdAt]
    },
    
    airplaneQuantity: {
      sql: `airplane_quantity`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    airlineName: {
      sql: `airline_name`,
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
    
    headerquarterState: {
      sql: `headerquarter_state`,
      type: `string`
    },
    
    headerquarterCountry: {
      sql: `headerquarter_country`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    contactPhone: {
      sql: `contact_phone`,
      type: `string`
    },
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    carry: {
      sql: `carry`,
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
