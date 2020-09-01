cube(`Supplier`, {
  sql: `SELECT * FROM public.supplier`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, supplierName, createdAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    supplierName: {
      sql: `supplier_name`,
      type: `string`
    },
    
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
    
    contactPhone: {
      sql: `contact_phone`,
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
