cube(`Airport`, {
  sql: `SELECT * FROM public.airport`,
  
  joins: {
    Region: {
      sql: `${CUBE}.region_code = ${Region}.code`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, country, city, createdAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    regionCode: {
      sql: `region_code`,
      type: `string`
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }

});
