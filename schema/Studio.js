cube(`Studio`, {
  sql: `SELECT * FROM public.studio`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.studio`
  },
  
  joins: {
    
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [id, supplierName, createdAt]
    } */
  },
  
  dimensions: {
  
    name: {
      sql: `name`,
      type: `string`
    },
    
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
    /*
    industry: {
      sql: `industry`,
      type: `string`
    },
    headQuarter: {
      sql: `head_quarter`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    }, 
    
    
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    relationship: {
      sql: `relationship`,
      type: `string`
    },
    
    contactPhone: {
      sql: `contact_phone`,
      type: `string`
    },
    
    
    relationshioSince: {
      sql: `relationshio_since`,
      type: `time`
    }
    */
  }
});
