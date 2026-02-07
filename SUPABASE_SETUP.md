# Supabase Integration Guide

## Setup Complete! ✅

Your photography project is now configured to connect with Supabase.

## Next Steps:

### 1. Get Your Supabase Credentials

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Click on **Settings** (gear icon) in the left sidebar
4. Click on **API** under Project Settings
5. Copy the following values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (under Project API keys)

### 2. Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### 3. Restart Your Development Server

After updating the `.env` file, restart your development server for the changes to take effect:

```bash
npm run dev
```

## How to Use Supabase in Your Components

### Example: Fetching Data

```tsx
import { supabase } from './lib/supabase';
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('your_table_name')
        .select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Example: Inserting Data

```tsx
import { supabase } from './lib/supabase';

async function addPhoto(photoData) {
  const { data, error } = await supabase
    .from('photos')
    .insert([
      { 
        title: photoData.title, 
        url: photoData.url,
        description: photoData.description 
      }
    ]);

  if (error) {
    console.error('Error inserting photo:', error);
  } else {
    console.log('Photo added successfully:', data);
  }
}
```

### Example: File Upload (for photos)

```tsx
import { supabase } from './lib/supabase';

async function uploadPhoto(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `photos/${fileName}`;

  // Upload file to Supabase Storage
  const { data, error } = await supabase.storage
    .from('photography-bucket') // Create this bucket in Supabase Storage first
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading file:', error);
    return null;
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('photography-bucket')
    .getPublicUrl(filePath);

  return publicUrl;
}
```

## Creating Tables in Supabase

1. Go to your Supabase Dashboard
2. Click on **Table Editor** in the left sidebar
3. Click **New Table**
4. Create tables for your photography project, for example:

### Example: Photos Table

```sql
create table photos (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  image_url text not null,
  category text,
  featured boolean default false
);

-- Enable Row Level Security
alter table photos enable row level security;

-- Create policy to allow public read access
create policy "Public photos are viewable by everyone"
  on photos for select
  using (true);
```

### Example: Contact Messages Table

```sql
create table contact_messages (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  message text not null,
  read boolean default false
);

-- Enable Row Level Security
alter table contact_messages enable row level security;

-- Policy to allow anyone to insert messages
create policy "Anyone can submit contact messages"
  on contact_messages for insert
  with check (true);
```

## Common Operations

### Query with filters
```tsx
const { data } = await supabase
  .from('photos')
  .select('*')
  .eq('category', 'wedding')
  .order('created_at', { ascending: false });
```

### Update data
```tsx
const { data, error } = await supabase
  .from('photos')
  .update({ featured: true })
  .eq('id', photoId);
```

### Delete data
```tsx
const { error } = await supabase
  .from('photos')
  .delete()
  .eq('id', photoId);
```

## Authentication (Optional)

If you want to add admin authentication:

```tsx
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'admin@example.com',
  password: 'your-secure-password'
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'your-secure-password'
});

// Sign out
await supabase.auth.signOut();

// Get current user
const { data: { user } } = await supabase.auth.getUser();
```

## Resources

- [Supabase JavaScript Documentation](https://supabase.com/docs/reference/javascript)
- [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## Troubleshooting

- **CORS errors**: Make sure your site URL is added in Supabase Dashboard > Authentication > URL Configuration
- **RLS errors**: Check your Row Level Security policies
- **Environment variables not loading**: Restart your dev server after updating `.env`
