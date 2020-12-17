cube(`MediaRight`, {
  sql: `SELECT * FROM public.media_right`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.media_right`
  },
  
  joins: {
    Airline: {
      sql: `${CUBE}.airline_id = ${Airline}.id`,
      relationship: `belongsTo`
    },
    Media: {
      sql: `${CUBE}.media_id = ${Media}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [ id]
    }, */
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    /*
    createdAt: {
      sql: `created_at`,
      type: `time`
    } */
  }
});
