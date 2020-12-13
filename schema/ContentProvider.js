cube(`ContentProvider`, {
  sql: `SELECT * FROM public.content_provider`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.content_provider`
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, supplierName, createdAt]
    }
  },
  
  dimensions: {
    headQuarter: {
      sql: `head_quarter`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    industry: {
      sql: `industry`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    supplierName: {
      sql: `supplier_name`,
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
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    relationshioSince: {
      sql: `relationshio_since`,
      type: `time`
    }
  }
});
