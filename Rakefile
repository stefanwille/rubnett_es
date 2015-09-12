
task default: [:clean, :build] do
end

task :init do
  sh "bundle install"
end

task :build do
  sh "jekyll build"
  puts
end

task :serve do
  sh "jekyll serve"
end

task :deploy do
  puts "Deploying..."
  sh 'rsync -avz --delete -e "ssh" --progress _site/ sw:/home/www-data/sites/rubynett.es/'
end

task :clean do
  sh "rm -rf _site/*"
end

