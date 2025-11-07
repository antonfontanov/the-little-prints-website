import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Upload, CreditCard, FileImage, Check } from "lucide-react";
import { toast } from "sonner";

interface OrderFormProps {
  onNavigate: (page: string, orderData?: any) => void;
}

export function OrderForm({ onNavigate }: OrderFormProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedBackground, setSelectedBackground] = useState("beige");
  const [personalNotes, setPersonalNotes] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: ""
  });

  const backgroundOptions = [
    { id: "beige", name: "Warm Beige", color: "#f5f1ed", description: "Classic and cozy" },
    { id: "terracotta", name: "Terracotta", color: "#c77d3f", description: "Bold and earthy" },
    { id: "olive", name: "Muted Olive", color: "#8ca572", description: "Natural and calming" },
    { id: "amber", name: "Soft Amber", color: "#d4a574", description: "Gentle and warm" },
    { id: "cream", name: "Pure Cream", color: "#fdfcfb", description: "Clean and timeless" },
    { id: "sage", name: "Sage Green", color: "#a8b5a0", description: "Fresh and serene" }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one artwork image");
      return;
    }
    
    if (!customerInfo.name || !customerInfo.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const orderData = {
      uploadedFiles: uploadedFiles,
      selectedBackground: selectedBackground,
      personalNotes: personalNotes,
      customerInfo: customerInfo,
      total: uploadedFiles.length * 40,
      orderNumber: `LM${Date.now()}`,
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
    };

    toast.success("Proceeding to payment...");
    onNavigate('payment', orderData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl text-foreground">Create Your Poster</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your child's artwork into a beautiful poster. Just $40 per poster with free shipping.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Upload Section */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Upload Artwork
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="artwork-upload"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="artwork-upload" className="cursor-pointer">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <FileImage className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg text-foreground">Drop your artwork here or click to browse</p>
                        <p className="text-sm text-muted-foreground">Support JPG, PNG, HEIC files up to 10MB each</p>
                      </div>
                    </div>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Uploaded artwork ({uploadedFiles.length}):</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-sm text-foreground truncate">{file.name}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Background Selection */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Choose Background
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedBackground} onValueChange={setSelectedBackground}>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {backgroundOptions.map((option) => (
                      <div key={option.id} className="relative">
                        <RadioGroupItem
                          value={option.id}
                          id={option.id}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={option.id}
                          className={`flex flex-col items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            selectedBackground === option.id
                              ? 'border-primary bg-primary/10 shadow-md'
                              : 'border-border/50 hover:border-primary/50'
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-full border-2 ${
                              selectedBackground === option.id
                                ? 'border-primary ring-2 ring-primary/20'
                                : 'border-border/20'
                            }`}
                            style={{ backgroundColor: option.color }}
                          />
                          <div className="text-center">
                            <p className={`text-sm ${
                              selectedBackground === option.id
                                ? 'text-primary font-medium'
                                : 'text-foreground'
                            }`}>
                              {option.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{option.description}</p>
                          </div>
                          {selectedBackground === option.id && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="123 Main Street"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, city: e.target.value }))}
                      placeholder="New York"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input
                      id="zip"
                      value={customerInfo.zip}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, zip: e.target.value }))}
                      placeholder="10001"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={customerInfo.country}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, country: e.target.value }))}
                      placeholder="United States"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Notes */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Personal Notes (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={personalNotes}
                  onChange={(e) => setPersonalNotes(e.target.value)}
                  placeholder="Any special instructions or details about the artwork you'd like us to know..."
                  rows={4}
                  className="resize-none"
                />
              </CardContent>
            </Card>

            {/* Order Summary & Submit */}
            <Card className="border-border/50 bg-secondary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Number of posters:</span>
                    <span className="text-foreground">{uploadedFiles.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Price per poster:</span>
                    <span className="text-foreground">$40.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Shipping:</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="border-t border-border/50 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-foreground">Total:</span>
                      <span className="text-xl text-primary">${uploadedFiles.length * 40}.00</span>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 text-lg"
                    disabled={uploadedFiles.length === 0}
                  >
                    Place Order - ${uploadedFiles.length * 40}.00
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By placing your order, you agree to our terms of service and privacy policy.
                    Your artwork will be processed within 1-2 business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}