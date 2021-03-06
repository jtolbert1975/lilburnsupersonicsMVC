set :application, "lilburnsupersonics"
set :domain,      "{fetch(:application)}.com"
set :user,         "root"
set :use_sudo, false
set :deploy_to,   "/var/www/#{fetch(:application)}"
set :app_path,    "app"

set :scm,         :git
set :scm_username, "imanjesolutions@gmail.com"
set :scm_password, "jemani23"


set :repo_url, 'git@github.com:jtolbert1975/lilburnsupersonicsMVC.git'
set :branch, 'master'

set   :deploy_via,    :copy






# Or: `accurev`, `bzr`, `cvs`, `darcs`, `subversion`, `mercurial`, `perforce`, or `none`

set :model_manager, "doctrine"
# Or: `propel`

role :web,        %w{lilbrnsupersonics.com}                         # Your HTTP server, Apache/etc
role :app,         %w{lilbrnsupersonics.com}  , :primary => true       # This may be the same as your `Web` server

set :shared_files, ["app/config/parameters.yml"]
set :shared_children,     [app_path + "/logs", web_path + "/uploads", "vendor"]

set :use_composer, true
set :update_vendors, true

set  :keep_releases,  3

task :upload_parameters do
  origin_file = "app/config/parameters.yml"
  destination_file = shared_path + "/app/config/parameters.yml" # Notice the
  shared_path

  try_sudo "mkdir -p #{File.dirname(destination_file)}"
  top.upload(origin_file, destination_file)
end

after "deploy:setup", "upload_parameters"

# Be more verbose by uncommenting the following line
# logger.level = Logger::MAX_LEVEL