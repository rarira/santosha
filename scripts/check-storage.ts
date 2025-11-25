import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkStorage() {
  console.log('🔍 Checking storage files...\n');

  // List all files in images bucket
  const { data: files, error } = await supabase.storage
    .from('images')
    .list('posts', {
      limit: 100,
      offset: 0,
    });

  if (error) {
    console.error('❌ Error listing files:', error);
    return;
  }

  console.log('📁 Files in images/posts:');
  files?.forEach((file) => {
    console.log(`  - ${file.name}`);
  });

  console.log('\n🗄️  Checking database posts...\n');

  // Get posts with images
  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select('id, title, image')
    .not('image', 'is', null);

  if (postsError) {
    console.error('❌ Error fetching posts:', postsError);
    return;
  }

  console.log('📝 Posts with images:');
  posts?.forEach((post: any) => {
    console.log(`  ID: ${post.id}, Title: ${post.title}`);
    console.log(`     Image: ${JSON.stringify(post.image, null, 2)}`);
  });
}

checkStorage().catch(console.error);
