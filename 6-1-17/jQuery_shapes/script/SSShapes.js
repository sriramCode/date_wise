/*!
 * SSShapes JavaScript Library v1.0
 *
 * Released under the MIT license
 *
 * Date: 2016-06-24
 */

;(function(global, $) {
    
    // create a 'new' object
    var SSShapes = function(shape,dimension1,dimension2,color,direction) {
        return new SSShapes.init(shape,dimension1,dimension2,color,direction);   
    }
    
    // prototype holds methods (to save memory space)
    SSShapes.prototype = {
        
        // check that is a valid shape in library
        validate: function(self) {
            // convert the string name of the shape requested into a method name
            var method = eval('self.' + self.shape);
            // if the shape method is not in the library
            if (method === undefined) {
                throw "Invalid shape type - " + self.shape;
            }
        },
        
        // generate the Circle shape specifications
        circle: function(self) {
            
            // calculate the radius
            var radius = (self.dimension1 / 2) + 'px';
            
            // generate an Object with all specifications 
            var specs = {
                'width':  self.dimension1 +'px',
                'height': self.dimension2 + 'px',
                'background': self.color,
                '-moz-border-radius': radius,
                '-webkit-border-radius': radius,
                'border-radius': radius,
            };
            
            //return an object of CSS attributes 
            return specs;    
        },
        
        // generate the Square shape specifications
        square: function(self) {
            
            // generate an Object with all specifications 
            var specs = {
                'width':  self.dimension1 +'px',
                'height': self.dimension2 + 'px',
                'background': self.color
            };
            
            //return an object of CSS attributes 
            return specs;    
        },
        
        // generate the Triangle shape specifications
        triangle: function(self) {
            
            // hold the border attributes
            var borderAttrs,
                specs,
                newTriangle,
                longSide = self.dimension1 +'px',
                sides = (self.dimension1 / 2) + 'px';
            
            // generate border attributes based on direction provided
            switch (self.direction){
                case 'up':
                    borderAttrs = {
                        'border-left': sides + ' solid transparent',
                        'border-right': sides + ' solid transparent',
                        'border-bottom': longSide + ' solid ' + self.color
                    };
                    break;
                case 'down':
                    borderAttrs = {
                        'border-left': sides + ' solid transparent',
                        'border-right': sides + ' solid transparent',
                        'border-top': longSide + ' solid ' + self.color
                    };
                    break;
                case 'left':
                    borderAttrs = {
                        'border-top': sides + ' solid transparent',
                        'border-right': longSide + ' solid ' + self.color,
                        'border-bottom': sides + ' solid transparent'
                    };
                    break;
                case 'right':
                    borderAttrs = {
                        'border-top': sides + ' solid transparent',
                        'border-left': longSide + ' solid ' + self.color,
                        'border-bottom': sides + ' solid transparent'
                    };
                    break;
                case 'top left':
                    borderAttrs = {
                        'border-top': longSide + ' solid ' + self.color,
                        'border-right': longSide + ' solid transparent'
                    };
                    break;
                case 'top right':
                    borderAttrs = {
                        'border-top': longSide + ' solid ' + self.color,
                        'border-left': longSide + ' solid transparent'
                    };
                    break;
                case 'bottom left':
                    borderAttrs = {
                        'border-bottom': longSide + ' solid ' + self.color,
                        'border-right': longSide + ' solid transparent'
                    };
                    break;
                case 'bottom right':
                    borderAttrs = {
                        'border-bottom': longSide + ' solid ' + self.color,
                        'border-left': longSide + ' solid transparent'
                    };
                    break;
                default:
                    borderAttrs = {
                        'border-left': sides + ' solid transparent',
                        'border-right': sides + ' solid transparent',
                        'border-bottom': longSide + ' solid ' + self.color
                    };
            }
            specs = {
                'width': '0px',
                'height': '0px'
            };
            
            // append the generated border attributes to the Object which 
            //  has the specifications submitted by user
            newTriangle = Object.assign(specs, borderAttrs);
            
            // uncomment below to display log of specs generated in console
            /* 
            Object.getOwnPropertyNames(newTriangle).forEach(function(val, idx, array) {
                console.log(val + ' -> ' + newTriangle[val]);
            });
            */
            
            //return an object of CSS attributes 
            return newTriangle;    
        },
        
        // call to the appropriate shape function based on the shape name given
        createShape: function(selfObj) {
            
            // get 'this' execution context's reference
            var self = this; 
            
            // create the function via the string variable passed
            var shapeFunctionCalled = eval('self.' + selfObj.shape);
            
            // call the appropriate shape's function and return the specifications
            return shapeFunctionCalled(self);
            
        },
        
        // display the shape details in the console
        log: function() {
            
            if (console) {
                console.log(this.shape + ': ' + this.dimension1 + ', ' + this.dimension2 + ', ' + this.color + ', ' + this.direction); 
            }
            
            // make chainable
            return this;
        },
        
        // display the answer to the question in the selector that was passed in
        HTMLShape: function(selector) {
            var self = this;
            
            // check to see if jQuery is loaded already
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            // check to see if selector was sent
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // validate that the data sent by the user can be used to create one of shapes of this library
            try {
                self.validate(self);
                
                // display the shape in the chosen place on the DOM
                $(selector).css(this.createShape(self));
            }
            catch (error) {
                console.log("Error caught: ", error);
            }
            
            // make chainable
            return this;
        }
        
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    SSShapes.init = function(shape,dimension1,dimension2,color,direction) {
        
        var self = this;
        
        if (arguments.length < 3) {
            throw "Missing parameters!";
        }
        
        // initialize each of the object's variables
        self.shape = shape;
        self.dimension1 = dimension1;
        self.dimension2 = dimension2;
        self.color = color;
        self.direction = direction;
        
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    SSShapes.init.prototype = SSShapes.prototype;
    
    // attach our SSShapes to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.SSShapes = global._SSS = SSShapes;
    
}(window, jQuery));