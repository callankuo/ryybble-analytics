cube(`Flight`, {
  sql: `SELECT * FROM public.flight`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.flight`
  },
  
  joins: {
    Aircraft: {
      sql: `${CUBE}.tail = ${Aircraft}.tail`,
      relationship: `belongsTo`
    },
   // Airport: {
      //sql: `${CUBE}.origin = ${Airport}.code`,
      //relationship: `belongsTo`
    //},
    Airport: {
      sql: `${CUBE}.destination = ${Airport}.code`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [departDate, arrivalDate, id, createdAt]
    }, */
    flightTime: {
      sql: `flight_time`,
      type: `sum`
    }
  },
  
  dimensions: {
    /* Hide for PoC
    departDate: {
      sql: `depart_date`,
      type: `string`
    },
    
    arrivalDate: {
      sql: `arrival_date`,
      type: `string`
    },
    
    departTime: {
      sql: `depart_time`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    arrivalTime: {
      sql: `arrival_time`,
      type: `string`
    },
    
    flightNo: {
      sql: `flight_no`,
      type: `string`
    }, 
    */
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      //shown: true
    },
    
    origin: {
      sql: `origin`,
      type: `string`
    },
    /*
    tail: {
      sql: `tail`,
      type: `string`
    }, */
    
    destination: {
      sql: `destination`,
      type: `string`
    },
    rout: {
      sql: `rout`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    } 
  }
});
