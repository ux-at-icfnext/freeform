Gem::Specification.new do |spec|
    spec.name          = "Nex+ Library Freeform"
    spec.version       = "1.0.0"
    spec.authors       = ["dara", "demars", "tiffany", "peyton"]
    spec.email         = ["dara.pressley@icfnext.com", "demars.berhe@icfnext.com", "tiffany.scott@icfnext.com", "peyton.stewart@icfnext.com"]
  
    spec.summary       = "For library specifications and prototyping"
    spec.homepage      = "http://nextfreeform.io"
    spec.license       = "MIT"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
  
    spec.add_runtime_dependency "jekyll", "~> 4.2"
  end
