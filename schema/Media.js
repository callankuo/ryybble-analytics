cube(`Media`, {
  sql: `SELECT * FROM public.media`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.media`
  },
  
  joins: {
    Studio: {
      sql: `${CUBE}.studio_id = ${Studio}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    /*
    count: {
      type: `count`,
      drillMembers: [title, id, createdAt]
    } */
  },
  
  dimensions: {
    genres: {
      sql: `genres`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    fileType: {
      sql: `file_type`,
      type: `string`
    },
    fileSize: {
      sql: `file_size`,
      type: `string`
    },
    runTime: {
      sql: `run_time`,
      type: `number`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    contentType: {
      sql: `content_type`,
      type: `string`
    },
    
    usageType: {
      sql: `usage_type`,
      type: `string`
    },
    /*
    createdAt: {
      sql: `created_at`,
      type: `time`
    }, */
    /*
    publishSince: {
      sql: `publish_since`,
      type: `time`
    } */
  },
  segments: {
   
    contentTypeMovie: {
      sql: `${Media}.content_type = 'Movie'`
    },
    contentTypeTvEpisode: {
      sql: `${Media}.content_type = 'TV Episode'`
    }
    
    } 
  
});
