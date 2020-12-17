cube(`Region`, {
  sql: `SELECT * FROM public.region`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.region`
  },
  
  joins: {
    
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt]
    } */
  },
  
  dimensions: {
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }, 
    /*
    name: {
      sql: `name`,
      type: `string`
    }, 
    
    code: {
      sql: `code`,
      type: `string`
    },
   
    createdAt: {
      sql: `created_at`,
      type: `time`
    } */
  }
});
