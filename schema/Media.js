cube(`Media`, {
  sql: `SELECT * FROM public.media`,
  
  joins: {
    Supplier: {
      sql: `${CUBE}.supplier_id = ${Supplier}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [mediaName, id, createdAt]
    }
  },
  
  dimensions: {
    genres: {
      sql: `genres`,
      type: `string`
    },
    
    mediaName: {
      sql: `media_name`,
      type: `string`
    },
    
    mediaFormat: {
      sql: `media_format`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    mediaContentType: {
      sql: `media_content_type`,
      type: `string`
    },
    
    ifeUsageType: {
      sql: `ife_usage_type`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    publishSince: {
      sql: `publish_since`,
      type: `time`
    }
  }
});
