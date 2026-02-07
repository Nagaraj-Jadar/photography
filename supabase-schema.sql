-- Photography Website Database Schema
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/dekvrsnadtlqmjjeejtk/sql

-- ============================================
-- 1. PHOTOS TABLE (Portfolio Gallery)
-- ============================================
create table if not exists photos (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  image_url text not null,
  category text not null check (category in ('wedding', 'portrait', 'event', 'commercial', 'nature', 'other')),
  featured boolean default false,
  tags text[] default array[]::text[],
  display_order integer default 0
);

-- Enable Row Level Security
alter table photos enable row level security;

-- Allow public read access to photos
create policy "Photos are viewable by everyone"
  on photos for select
  using (true);

-- Allow authenticated users to manage photos (for admin panel later)
create policy "Authenticated users can insert photos"
  on photos for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update photos"
  on photos for update
  using (auth.role() = 'authenticated');

create policy "Authenticated users can delete photos"
  on photos for delete
  using (auth.role() = 'authenticated');

-- ============================================
-- 2. CONTACT MESSAGES TABLE
-- ============================================
create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  read boolean default false,
  replied boolean default false
);

-- Enable Row Level Security
alter table contact_messages enable row level security;

-- Allow anyone to submit contact messages
create policy "Anyone can submit contact messages"
  on contact_messages for insert
  with check (true);

-- Only authenticated users can read messages (admin only)
create policy "Authenticated users can read messages"
  on contact_messages for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can update messages"
  on contact_messages for update
  using (auth.role() = 'authenticated');

-- ============================================
-- 3. TESTIMONIALS TABLE
-- ============================================
create table if not exists testimonials (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  client_name text not null,
  client_role text,
  avatar_url text,
  rating integer check (rating >= 1 and rating <= 5),
  testimonial text not null,
  event_type text,
  published boolean default true,
  display_order integer default 0
);

-- Enable Row Level Security
alter table testimonials enable row level security;

-- Allow public to view published testimonials
create policy "Published testimonials are viewable by everyone"
  on testimonials for select
  using (published = true);

-- Allow authenticated users to manage testimonials
create policy "Authenticated users can manage testimonials"
  on testimonials for all
  using (auth.role() = 'authenticated');

-- ============================================
-- 4. SERVICES TABLE
-- ============================================
create table if not exists services (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  icon text,
  features text[] default array[]::text[],
  price_range text,
  active boolean default true,
  display_order integer default 0
);

-- Enable Row Level Security
alter table services enable row level security;

-- Allow public to view active services
create policy "Active services are viewable by everyone"
  on services for select
  using (active = true);

-- Allow authenticated users to manage services
create policy "Authenticated users can manage services"
  on services for all
  using (auth.role() = 'authenticated');

-- ============================================
-- 5. CREATE STORAGE BUCKET FOR IMAGES
-- ============================================
-- Note: Run this separately or use Supabase Dashboard > Storage to create bucket
-- Bucket name: photography-images
-- Public: Yes

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Sample photos
insert into photos (title, description, image_url, category, featured) values
  ('Beautiful Sunset Wedding', 'Captured the golden hour perfectly', 'https://images.unsplash.com/photo-1519741497674-611481863552', 'wedding', true),
  ('Corporate Headshots', 'Professional business portraits', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'portrait', true),
  ('Birthday Celebration', 'Memorable family moments', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d', 'event', false);

-- Sample testimonials
insert into testimonials (client_name, client_role, rating, testimonial, event_type) values
  ('John & Sarah', 'Wedding Couple', 5, 'Amazing photographer! Captured every special moment of our wedding day. Highly recommended!', 'Wedding'),
  ('Tech Corp', 'HR Manager', 5, 'Professional and efficient. Our team headshots turned out perfect!', 'Corporate'),
  ('Emily Rodriguez', 'Birthday Client', 5, 'Made my daughter''s birthday party so memorable. Beautiful photos!', 'Birthday Party');

-- Sample services
insert into services (title, description, features, price_range) values
  ('Wedding Photography', 'Complete wedding day coverage with beautiful memories', 
   array['Full day coverage', 'Engagement shoot', '200+ edited photos', 'Online gallery'], 
   '₹50,000 - ₹1,50,000'),
  ('Portrait Sessions', 'Professional portraits for individuals and families',
   array['1-2 hour session', '20+ edited photos', 'Multiple outfit changes', 'Location of choice'],
   '₹5,000 - ₹15,000'),
  ('Event Photography', 'Coverage for birthdays, corporate events, and celebrations',
   array['Event coverage', '100+ edited photos', 'Quick turnaround', 'Digital delivery'],
   '₹10,000 - ₹30,000');

-- ============================================
-- INDEXES for better performance
-- ============================================
create index if not exists photos_category_idx on photos(category);
create index if not exists photos_featured_idx on photos(featured);
create index if not exists contact_messages_created_idx on contact_messages(created_at desc);
create index if not exists testimonials_published_idx on testimonials(published);

-- ============================================
-- DONE! Your database is ready to use.
-- ============================================
