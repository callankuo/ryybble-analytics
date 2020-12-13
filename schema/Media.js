cube(`Media`, {
  sql: `SELECT * FROM public.media`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.media`
  },
  
  joins: {
    ContentProvider: {
      sql: `${CUBE}.supplier_id = ${ContentProvider}.id`,
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
