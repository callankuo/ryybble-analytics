cube(`FlightMedia`, {
  sql: `SELECT * FROM public.flight_media`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.flight_media`
  },
  
  joins: {
    Flight: {
      sql: `${CUBE}.flight_id = ${Flight}.id`,
      relationship: `belongsTo`
    },
    Media: {
      sql: `${CUBE}.media_id = ${Media}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [ id, createdAt]
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }
});
