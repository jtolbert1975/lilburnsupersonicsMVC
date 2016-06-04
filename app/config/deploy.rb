set :application, "lilburnsupersonics"
set :domain,      "www.lilburnsupersonics.com"
set :port,  7822
set :deploy_to,   "/var/www/lilburnsupersonics"
set :app_path,    "app"

set :scm,         :git
set :scm_username, "imanjesolutions@gmail.com"
set :scm_password, "jemani23"
set :repository, 'git@github.com:jtolbert1975/lilburnsupersonicsMVC.git'



set :branch, 'release'




set :model_manager, "doctrine"
# Or: `propel`

role :web,  domain                     # Your HTTP server, Apache/etc
role :app,  domain       , :primary => true       # This may be the same as your `Web` server



set :use_sudo, false
set :user,  "root"


set  :keep_releases,  3

set :use_composer, true
set :update_vendors, true

set :shared_files, ["app/config/parameters.yml"]
set :shared_children,     [app_path + "/logs", web_path + "/uploads", "vendor",]




set :writable_dirs,       ["app/cache", "app/logs", "app/sessions"]
set :webserver_user,      "www-data"
set :permission_method,   :chmod
set :use_set_permissions, true

set :ssh_options,{
forward_agent: true,

}

task :upload_parameters do
  origin_file = "app/config/parameters.yml"
  destination_file = shared_path + "/app/config/parameters.yml" # Notice the
  shared_path

  try_sudo "mkdir -p #{File.dirname(destination_file)}"
  top.upload(origin_file, destination_file)
end

after "deploy:setup", "upload_parameters"

# Be more verbose by uncommenting the following line
 logger.level = Logger::MAX_LEVEL